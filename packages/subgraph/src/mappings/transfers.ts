import { Address } from '@graphprotocol/graph-ts';

import { Transfer as TransferEvent } from '../types/CeaErc20/erc20';
import { Transfer } from '../types/schema';
import { addToken } from './tokens';

export function handleTransfer(event: TransferEvent): void {
  const transactionHash: string = event.transaction.hash.toHex();
  const transfer = new Transfer(transactionHash);
  transfer.from = event.params.from.toHex();
  transfer.to = event.params.to.toHex();
  transfer.value = event.params.value;
  transfer.save();

  const to: Address | null = event.transaction.to;
  if (to) {
    addToken(to.toHex());
  }
}
