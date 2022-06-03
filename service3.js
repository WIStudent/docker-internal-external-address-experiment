import fastifyFactory from 'fastify';

const fastify = fastifyFactory({logger: true});

fastify.get('/greetings', async (request, reply) => {
  const service1Greetings = await fetch('http://service1.local/greetings').then(r => r.json());
  reply.send({
    msg: 'service3 says hello',
    service1Greetings
  });
});

const main = async () => {
  console.log("starting service 3");
  try {
    await fastify.listen(80, "0.0.0.0");
  } catch (error)
  {
    fastify.log.error(error);
    process.exit(1);
  }
};

main();
