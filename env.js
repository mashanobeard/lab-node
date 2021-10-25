const Mode = {
  Development: '-Dev',
  Test: '-Test',
};

export const postfixName = (title) => {
  const postfixName = process.env.NODE_ENV && Mode[process.env.NODE_ENV.trim()];
  return postfixName ? title + postfixName : title;
};
