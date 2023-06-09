import React, { useEffect, useRef, useState } from "react";
import "./firebase-messaging-sw";
import useNotification, { getInitToken } from "./firebase-messaging-sw";
import { postPushNotification } from "./lib/api/notification";

const App = () => {
  const [happheeToken, setHappheeToken] = useState("");
  const triggerNotif = useNotification("Hello, React hooks!", {
    body: "Nice React!",
  });

  const getToken = async () => {
    const token = await getInitToken();
    if (token) setHappheeToken(token);
  };

  const handlePushNotification = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("dd");
    await postPushNotification({
      message: {
        token: happheeToken,
        notification: {
          title: "웹에서보내는 푸쉬알림",
          body: "성공 >.<",
        },
      },
    });
  };
  useEffect(() => {
    // getToken();
  }, []);
  return (
    <div>
      <span>토근 발급 </span>
      <span>{happheeToken}</span>
      <button type="button" onClick={handlePushNotification}>
        핸드폰으로 푸쉬알림 보내기
      </button>
      <button onClick={triggerNotif}>Notif</button>
    </div>
  );
};

export default App;
