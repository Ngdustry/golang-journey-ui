export const user = {
  id: '1a2b3c',
  firstName: 'John'
};

export const task = {
  id: '1a',
  text: 'Hello World!',
  status: 'active',
  user
};

export const draft = {
  draft: true,
  id: 1,
  text: 'Hello World!',
  status: 'active'
};

export const tasks = (total?: number) => {
  const _total = total || 4;

  return Array(_total).map((_, idx) => ({
    ...task,
    id: `${idx}a`
  }));
};
