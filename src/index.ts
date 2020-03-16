import { WebClient, ChatPostMessageArguments } from '@slack/web-api';

export class Slack {
  private web: WebClient;

  constructor(token: string) {
    this.web = new WebClient(token);
  }

  async post(message: ChatPostMessageArguments) {
    try {
      await this.web.chat.postMessage(message);
    } catch (error) {
      return error;
    }
  }
}

export { ChatPostMessageArguments } from '@slack/web-api'