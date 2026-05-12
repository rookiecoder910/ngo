const { Resend } = require('resend');
const resend = new Resend('re_Swx29dmC_A5hfwqJxeCDypuA3z8mhATEs');

async function test() {
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'fuckucherry9811@gmail.com',
            subject: 'Test Script',
            html: '<p>Test</p>'
        });
        console.log("Success:", data);
    } catch(e) {
        console.error("Error:", e);
    }
}
test();
