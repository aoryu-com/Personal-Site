export default defineEventHandler(() => {
    return {
        subject: "acct:admin@aoryu.com",
        links: [
            {
                rel: "http://openid.net/specs/connect/1.0/issuer",
                href: "https://auth.aoryu.com"
            }
        ]
    };
});
