import fastifyFactory from 'fastify';

const fastify = fastifyFactory({logger: true});

fastify.get('/greetings', (request, reply) => {
  reply.send({
    msg: 'service2 says hello',
    linkToService1: 'http://service1.local/greetings'
  });
});

const main = async () => {
  console.log("starting service 2");
  try {
    await fastify.listen(80, "0.0.0.0");
  } catch (error)
  {
    fastify.log.error(error);
    process.exit(1);
  }
};

main();
