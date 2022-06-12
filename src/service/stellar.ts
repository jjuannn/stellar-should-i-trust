import axios from "axios";
import Account from "../entity/account";
import accountMapper from "../mapper/account";

const STELLAR_EXPERT_BASE_URL =
  "https://api.stellar.expert/explorer/directory?tag[]=malicious&tag[]=unsafe&address[]=";

export async function getSuspiciousAccount(
  accountAddress: string
): Promise<Account | any> {
  try {
    const url = `${STELLAR_EXPERT_BASE_URL}${accountAddress}`;
    const req = await axios.get(url);
    return accountMapper(req.data);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
