import Global from '@Models/Global';

async function createInitial() {
  return {
    global: new Global(),
  };
}

export default createInitial;
