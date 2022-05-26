import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProductCreate as ProductCreateEvent,
  Transfer as TransferEvent,
  UpdateStatusProduct as UpdateStatusProductEvent
} from "../generated/ProductManager/ProductManager"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  ProductCreate,
  Transfer,
  UpdateStatusProduct
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleProductCreate(event: ProductCreateEvent): void {
  let entity = new ProductCreate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  // entity.id = event.params.id
  entity.name = event.params.name
  entity.descriptio = event.params.descriptio
  entity.link = event.params.link
  entity.status = 0
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleUpdateStatusProduct(
  event: UpdateStatusProductEvent
): void {
  let entity = new UpdateStatusProduct(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  // entity.id = event.params.id
  entity.status = event.params.status
  entity.save()
}
