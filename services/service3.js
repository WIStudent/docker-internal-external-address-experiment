import fastifyFactory from 'fastify';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const {name, port, service1Address} = yargs(hideBin(process.argv))
    .option('name', {
      type: 'string',
      demandOption: true,
      requiresArg: true
    })
    .option('port', {
      type: 'number',
      demandOption: true,
      requiresArg: true
    })
    .option('service1-address', {
      type: 'string',
      demandOption: true,
      requiresArg: true
    })
    .parse();

const fastify = fastifyFactory({logger: true});

fastify.get('/greetings', async (request, reply) => {
  const service1Greetings = await fetch(`${service1Address}/greetings`).then(r => r.json());
  reply.send({
    name,
    msg: 'service3 says hello',
    service1Greetings
  });
});

const main = async () => {
  console.log("starting service 3");
  try {
    await fastify.listen(port, "0.0.0.0");
  } catch (error)
  {
    fastify.log.error(error);
    process.exit(1);
  }
};

main();
