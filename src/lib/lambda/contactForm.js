// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
/* import {
    DynamoDBDocumentClient,
    ScanCommand,
    PutCommand,
    GetCommand,
    DeleteCommand,
} from "@aws-sdk/lib-dynamodb"; */

// const client = new DynamoDBClient({});
// const dynamo = DynamoDBDocumentClient.from(client);
const ses = new SESClient({ region: "ap-southeast-2" });

const SERVICE_TYPES = [
    { value: 'advertise', text: 'Advertise a cleaner' },
    { value: 'request', text: 'Request listings for your city' },
    { value: 'feedback', text: 'Submit your feedback' },
];

const SENDER = 'inquiries@findprocleaners.co.nz';
const RECIPIENT = 'findprocleaners@gmail.com';
const ADMIN = 'marlonsvillarama@gmail.com';

const buildEmails = (options) => {
    let { ts, name, email, type, city, message } = options;
    let output = [];

    /* let dt = new Date(
        date.slice(0, 4),
        parseInt(date.slice(4, 6)) - 1,
        date.slice(6),
        time.slice(0, 2),
        parseInt(time.slice(2))
    ); */
    let dt = new Date(ts);
    let dateString = dt.toLocaleString('en-NZ', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    let timeString = dt.toLocaleTimeString('en-NZ');

    // let hourString = time.slice(0, 2);
    // let hour = parseInt(hourString);
    // let timeString = `${hour <= 12 ? hour : hour - 12}:${time.slice(2)} ${hour < 12 ? 'AM' : 'PM'}`;
    let serviceType = SERVICE_TYPES.find(t => t.value === type);

    // Customer notification
    output.push({
        to: email,
        subject: `FindProCleaners.co.nz - Thank you for your inquiry!`,
        body: `<h1>Thank you for submitting your inquiry!</h1>
        <p>We will get back to you as soon as possible. In the meantime, please see your details below:</p>
        <aside>
            <div class="row">
                <span>Date submitted:</span>
                <span>${dateString} ${timeString}</span>
            </div>
            <div class="row">
                <span>Type:</span>
                <span>${serviceType.text}</span>
            </div>
            <div class="row">
                <span>Message:</span>
                <span>${message}</span>
            </div>
        </aside>`,
    });

    // Internal notification
    output.push({
        to: RECIPIENT,
        cc: ADMIN,
        subject: `FindProCleaners.co.nz - Thank you for your inquiry!`,
        body: `<h2>New inquiry booked:</h2>
        <aside>
            <div class="row">
                <span>Date submitted:</span>
                <span>${dateString} ${timeString}</span>
            </div>
            <div class="row">
                <span>Type:</span>
                <span>${serviceType.text}</span>
            </div>
            <div class="row">
                <span>Message:</span>
                <span>${message}</span>
            </div>
        </aside>`,
    });

    return output;
};

const sendEmails = async (options) => {
    console.log('sendEmails', options);
    let emails = buildEmails(options);
    console.log('emails', emails.length);

    let emailResponses = [];

    for (let i = 0, count = emails.length; i < count; i++) {
        let email = emails[i];
        console.log('email', email);
        let emailData = {
            Source: SENDER,
            Destination: {
                ToAddresses: [ email.to ]
            },
            Message: {
                Body: {
                Html: {
                    Charset: 'utf-8',
                    Data: email.body
                },
                Text: {
                    Charset: 'utf-8',
                    Data: 'Inquiry submitted!'
                }
            },
            Subject: {
                Charset: 'utf-8',
                Data: email.subject
                }
            },
        };
        if (email.cc) {
            emailData.Destination.CcAddresses = [ email.cc ];
        }
        console.log('emailData', JSON.stringify(emailData));
        let command = new SendEmailCommand(emailData);

        let emailResponse = {};
        try {
            emailResponse = await ses.send(command);
            console.log('SES emailResponse', emailResponse);
            emailResponses.push(emailResponse);
        } catch (err) {
            console.error('*** Send email error ***', err);
        }
        finally {
            console.log('*** sendEmails END ***');
        }
    }

    return emailResponses;
};

export const handler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json",
    };

    console.log('{id}', event.pathParameters);
    console.log('routeKey', event.routeKey);
    try {
        switch (event.routeKey) {
            case "POST /inquiry":
                let requestJSON = JSON.parse(event.body);
                console.log('request', requestJSON);

                // TODO Send confirmation email
                let emailResponses = await sendEmails(requestJSON);

                body = { ok: true, id: requestJSON.id };
                console.log('response body', emailResponses);
                break;
            default: {
                // throw new Error(`Unsupported route: "${event.routeKey}"`);
                body = { ok: false, error: 'Unsupported route' };
            }
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
