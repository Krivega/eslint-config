const test = [true, false];

test.forEach(() => {
  // eslint-disable-next-line no-console
  console.log('test');
});

class Test<T> {
  public test2 = 'test2';

  public t: T;

  public parameters: {
    blurStrength: number;
    fixSegmentation: boolean;
    fixSegmentationBlurStrength: number;
    fixSegmentationIterations: number;
    alphaCutterLowerBound: number;
    alphaCutterUpperBound: number;
  } = {
    blurStrength: 0.8,
    fixSegmentation: true,
    fixSegmentationBlurStrength: 0.25,
    fixSegmentationIterations: 8,
    alphaCutterLowerBound: 0.4,
    alphaCutterUpperBound: 0.6,
  };

  private readonly test1;

  private test4 = 'test4';

  public constructor(t: T, test1: string) {
    this.test1 = test1;
    this.t = t;
    this.test6();
  }

  public test6() {
    this.test5();

    return this.test4;
  }

  public test7() {
    let value1: string;
    let value2: string;

    if (this.t === true) {
      value1 = 'test7';
      value2 = 'test7';
    } else {
      value1 = 'test8';
      value2 = 'test8';
    }

    return { value1, value2 };
  }

  private test5() {
    this.test4 = this.test1;
  }
}

export type TWhenThereIsTime = {
  dispose: () => void;
  when: () => Promise<void>;
};

export type TModelWithId = { id: string };

export { Test };

export const test5 = 'tesNotFunction do look like a valid function)';
export const test6 = "'tesNotFunction' doesn't look like a valid function)";
export const test7 = `${test5}x`;
export const test8 = `asd${test6}${test5}`;

export const list = [] as string[];

list.push('test');
list.push('test2');

export const vertexShaderSource =
  'attribute vec3 aVertexCoord;' +
  '\nattribute vec2 aTextureCoord;' +
  '\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n  gl_Position = vec4(aVertexCoord, 1.0);\n  vTextureCoord = aTextureCoord;\n}';

export type TVideoSources = {
  CIF: string;
  '360p': string;
  '720p': string;
  '1080p': string;
};

export const SOME_CONST1 = 'some1';
export const SOME_CONST2 = 'some2' as const;

const i = true;
const j = true;
const args = true;
const Args = true;
const e2e = true;
const db = true;
const DB = true;
const props = true;
const Props = true;
const Prop = true;
const prop = true;
const Params = true;
const params = true;
const env = true;
const Env = true;
const prev = true;
const Prev = true;
const dir = true;
const Dir = true;
const utils = true;
const Utils = true;
const dev = true;
const Dev = true;

// eslint-disable-next-line no-console
console.log({
  i,
  j,
  args,
  Args,
  e2e,
  db,
  DB,
  props,
  Props,
  Prop,
  prop,
  Params,
  params,
  env,
  Env,
  prev,
  Prev,
  dir,
  Dir,
  utils,
  Utils,
  dev,
  Dev,
});

export type TLineLong =
  | { type: 'EVENT_IDLE' }
  | { type: 'EVENT_VALID' }
  | { type: 'EVENT_INVALID' };

export type TValidationResult =
  | {
      isValid: true;
    }
  | {
      isValid: false;
    };

export const subscriptions = new Map<string, ((source: string) => void)[]>();

type TConfirmationStore = {
  removeConfirmation: (self: TConfirmationStore) => void;
};

const PARENT_MODEL_INDEX = 0;

const getParent = <T>(self: T, index: number) => {
  // eslint-disable-next-line no-console
  console.log('🚀 temp  ~ index.ts:173 ~ index:', index);
  // eslint-disable-next-line no-console
  console.log('🚀 temp  ~ index.ts:173 ~ self:', self);

  return {
    removeConfirmation: (self2: T) => {
      // eslint-disable-next-line no-console
      console.log('🚀 temp  ~ index.ts:178 ~ self2:', self2);
    },
  };
};

export const getActions = (self: TConfirmationStore) => {
  const close = () => {
    const { removeConfirmation } = getParent<{
      removeConfirmation: (self: TConfirmationStore) => void;
    }>(self, PARENT_MODEL_INDEX);

    removeConfirmation(self as TConfirmationStore);
  };

  return { close };
};
