import { RekognitionClient, DetectFacesCommand } from '@aws-sdk/client-rekognition';

const client = new RekognitionClient({ region: 'YOUR_AWS_REGION' });

const analyzeImage = async (imageData) => {
    const params = {
        Image: {
            Bytes: Buffer.from(imageData, 'base64'),
        },
        Attributes: ['ALL'],
    };

    try {
        const data = await client.send(new DetectFacesCommand(params));
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};
