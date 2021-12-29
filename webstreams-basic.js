import { ReadableStream } from 'node:stream/web';
import { setInterval as every } from 'node:timers/promises';

const INTERVAL = 500;

const readable = new ReadableStream({
    async start(controller) {
        for await (const t of every(INTERVAL)) {
            controller.enqueue(performance.now());
        }
    }
});

for await (const t of readable) {
    console.log('timestamp: ', t);
}