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

fastify.get('/greetings', (request, reply) => {
  reply.send({
    name,
    msg: 'service2 says hello',
    linkToService1: `${service1Address}/greetings`
  });
});

const main = async () => {
  console.log("starting service 2");
  try {
    await fastify.listen(port, "0.0.0.0");
  } catch (error)
  {
    fastify.log.error(error);
    process.exit(1);
  }
};

main();
