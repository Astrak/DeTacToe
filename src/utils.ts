export function mapNetworkToName(network: number): string {
  switch (network) {
    case 11155111:
      return 'Sepolia Testnet';
    case 5777:
      return 'Local ganache network';
    default:
      return 'Unknown network';
  }
}

export function getNetworkUnit(network: number): string {
  switch (network) {
    case 11155111:
      return 'SepoliaETH';
    case 5777:
      return 'DGCC';
    default:
      return 'Eth';
  }
}

export function isNullAddress(address: string): boolean {
  return /^0x0+$/.test(address);
}

export function shortenAddress(address: string): string {
  const firstBit = address.slice(0, 6);
  const lastBit = address.slice(address.length - 4, address.length);
  return `${firstBit}....${lastBit}`;
}
