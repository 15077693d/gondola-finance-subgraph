import { BigInt } from "@graphprotocol/graph-ts";
import {
  Deposit as DepositContract,
  EmergencyWithdraw as EmergencyWithdrawContract,
  OwnershipTransferred as OwnershipTransferredContract,
  Withdraw as WithdrawContract,
} from "../generated/Contract/Contract";
import {
  Deposit,
  EmergencyWithdraw,
  OwnershipTransferred,
  Withdraw,
} from "../generated/schema";

export function handleDeposit(event: DepositContract): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Deposit.load(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new Deposit(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    );
  }

  // Entity fields can be set based on event parameters
  entity.user = event.params.user;
  entity.pid = event.params.pid;
  entity.amount = event.params.amount;
  entity.timestamp = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleEmergencyWithdraw(
  event: EmergencyWithdrawContract
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = EmergencyWithdraw.load(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new EmergencyWithdraw(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    );
  }

  // Entity fields can be set based on event parameters
  entity.user = event.params.user;
  entity.pid = event.params.pid;
  entity.amount = event.params.amount;
  entity.timestamp = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredContract
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = OwnershipTransferred.load(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new OwnershipTransferred(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    );
  }

  // Entity fields can be set based on event parameters
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.timestamp = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleWithdraw(event: WithdrawContract): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Withdraw.load(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new Withdraw(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    );
  }

  // Entity fields can be set based on event parameters
  entity.user = event.params.user;
  entity.pid = event.params.pid;
  entity.amount = event.params.amount;
  entity.timestamp = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save();
}
