import Account from "../entity/account";

interface IMapperProps {
  _embedded: {
    records: [{ address: string; name: string; tags: string[] }];
  };
}

export default function accountMapper({ _embedded }: IMapperProps) {
  if (_embedded.records.length) {
    const result = _embedded.records[0];
    const { address, name, tags } = result;
    return new Account(name, address, tags);
  } else {
    return { accountIsTrustable: true };
  }
}
