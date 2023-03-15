import { useMemo } from 'react';

import { Modal_Closed_Time_Key, Panel_Closed_Time_Key } from '../utils/common';

const Close_Limit_Times = 0.5 * 60 * 1000; // 30s

export default function useCloseTimeLimit({ isModal }) {
  const isCloseTimeLimit = useMemo(() => {
    let isCloseLimit = true;
    const modalCloseTime = localStorage.getItem(
      isModal ? Modal_Closed_Time_Key : Panel_Closed_Time_Key,
      null
    );
    if (!modalCloseTime) isCloseLimit = false;
    else if (
      new Date().getTime() - new Date(modalCloseTime).getTime() >
      Close_Limit_Times
    ) {
      isCloseLimit = false;
      localStorage.removeItem(
        isModal ? Modal_Closed_Time_Key : Panel_Closed_Time_Key
      );
    }

    return isCloseLimit;
  }, [isModal]);

  return { isCloseTimeLimit };
}
