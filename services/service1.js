import fastifyFactory from 'fastify';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const {name, port} = yargs(hideBin(process.argv))
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
    .parse();

const fastify = fastifyFactory({logger: true});

fastify.get('/greetings', (request, reply) => {
  reply.send({
    name,
    msg: "service1 says hello"
  });
});

const main = async () => {
  console.log("starting service 1");
  try {
    await fastify.listen(port, "0.0.0.0");
  } catch (error)
  {
    fastify.log.error(error);
    process.exit(1);
  }
};

main();
