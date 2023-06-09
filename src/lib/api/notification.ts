import { happheeWebClient } from "../axios";

interface MessageInfo {
  message: {
    token: string;
    notification: {
      title: string;
      body: string;
    };
  };
}
export const postPushNotification = async (messageData: MessageInfo) => {
  console.log(messageData);
  try {
    const { data } = await happheeWebClient.post(
      "https://fcm.googleapis.com/v1/projects/react-pe/messages:send",
      messageData
    );
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};
