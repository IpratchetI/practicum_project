import { Block } from '../../utils/Block';

const receivedMessageTpl = `
    <h5 class="received-message">
      {{{content}}}
    </h5>
`;

interface ReceivedMessageProps{
  content: string;
  isMine: string;
}

export class ReceivedMessage extends Block {
  constructor(props: ReceivedMessageProps) {
    super('div', props);
  }

  _init() {
    this.element!.classList.add('received-message-text-box');
  }

  render(): string {
    return this.compile(receivedMessageTpl, this.props);
  }
}
