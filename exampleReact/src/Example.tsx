import { useEffect, useState } from 'react';

import './App.css';

const Example = () => {
  const [handleSave, setHandleSave] = useState<undefined | (() => void)>(undefined);
  const [handleBlur, setHandleBlur] = useState<undefined | (() => void)>(undefined);
  const [handleFocus, setHandleFocus] = useState<undefined | (() => void)>(undefined);
  const [handleMouseEnter, setHandleMouseEnter] = useState<undefined | (() => void)>(undefined);

  useEffect(() => {
    setHandleSave(() => {
      // eslint-disable-next-line no-console
      console.log('save');
    });
    setHandleBlur(() => {
      // eslint-disable-next-line no-console
      console.log('blur');
    });
    setHandleFocus(() => {
      // eslint-disable-next-line no-console
      console.log('focus');
    });
    setHandleMouseEnter(() => {
      // eslint-disable-next-line no-console
      console.log('enter');
    });
  }, []);

  return (
    <>
      <p>
        Edit <code>src/App.tsx</code>
        and save to test HMR
      </p>

      {/*
        Порядок сортировки props согласно настройкам jsx-sort-props:

        1. shorthandFirst: true - Shorthand props (disabled, required) идут первыми
        2. noSortAlphabetically: false - Обычные props сортируются по алфавиту
        3. reservedFirst: false - Reserved props (key, ref) НЕ приоритетные
        4. callbacksLast: true - Callback props (onClick, onChange) идут в конце

        Итоговый порядок: shorthand → alphabetical → callbacks
      */}
      <button
        disabled
        aria-label="Save button"
        className="btn primary"
        data-testid="save-btn"
        id="correct-button"
        key="test"
        tabIndex={0}
        title="Click to save"
        type="button"
        onBlur={() => {
          return handleBlur?.();
        }}
        onClick={() => {
          return handleSave?.();
        }}
        onFocus={() => {
          return handleFocus?.();
        }}
        onMouseEnter={() => {
          return handleMouseEnter?.();
        }}
      >
        Correct Sort
      </button>

      <button
        type="button"
        onClick={() => {
          return handleSave?.();
        }}
      >
        Save
      </button>
    </>
  );
};

export default Example;
