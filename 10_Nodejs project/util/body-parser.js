module.exports = async (request) => {
    return new Promise((resolve, reject) => {
        try {
            let body = "";

            request.on("data", (chunk) => {
                body += chunk;
            });

            request.on("end", () => {
                try {
                    const parsedBody = JSON.parse(body);
                    resolve(parsedBody);
                } catch (parseError) {
                    console.error(parseError);
                    reject(parseError);
                }
            });
        } catch (err) {
            console.error(err);
            reject(err);
        }
    });
};
