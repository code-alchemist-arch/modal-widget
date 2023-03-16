import { useMemo } from 'react';

import {
  Modal_Closed_Time_Key,
  Panel_Closed_Time_Key,
  Banner_Closed_Time_Key,
  Widget_Category,
} from '../utils/common';

const Close_Limit_Times = 0.5 * 60 * 1000; // 30s

export default function useCloseTimeLimit({ widgetCategory }) {
  const key = useMemo(() => {
    if (widgetCategory === Widget_Category.fModal) return Modal_Closed_Time_Key;
    if (widgetCategory === Widget_Category.bPanel) return Panel_Closed_Time_Key;
    return Banner_Closed_Time_Key;
  }, [widgetCategory]);

  const isCloseTimeLimit = useMemo(() => {
    let isCloseLimit = true;
    const modalCloseTime = localStorage.getItem(key, null);
    if (!modalCloseTime) isCloseLimit = false;
    else if (
      new Date().getTime() - new Date(modalCloseTime).getTime() >
      Close_Limit_Times
    ) {
      isCloseLimit = false;
      localStorage.removeItem(key);
    }

    return isCloseLimit;
  }, [key]);

  return { isCloseTimeLimit };
}
