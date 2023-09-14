import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: string; output: string; }
  BigInt: { input: string; output: string; }
  Bytes: { input: string; output: string; }
};

/**
 * Actions on the pool like a join, exit or swap. This keeps track of how much of each token was transfered
 *
 */
export type Activity = {
  __typename?: 'Activity';
  /**
   * Wallet address
   *
   */
  address: Scalars['String']['output'];
  amount: Array<Scalars['BigDecimal']['output']>;
  /**
   * Pool ID + pool.num_tx
   *
   */
  id: Scalars['ID']['output'];
  pool: Pool;
  price_btc: Array<Scalars['BigDecimal']['output']>;
  price_usd: Array<Scalars['BigDecimal']['output']>;
  symbol: Array<Scalars['String']['output']>;
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  /**
   * One of 'join', 'exit', 'swap', 'token-add', 'token-remove' or 'public'
   *
   */
  type: Scalars['String']['output'];
};

export type Activity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  price_btc?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_btc_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_btc_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_btc_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_btc_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_btc_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_usd?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_usd_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_usd_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_usd_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_usd_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_usd_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  symbol?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Activity_OrderBy =
  | 'address'
  | 'amount'
  | 'id'
  | 'pool'
  | 'price_btc'
  | 'price_usd'
  | 'symbol'
  | 'timestamp'
  | 'txHash'
  | 'type';

/**
 * Information about an asset in a specific pool
 *
 */
export type Asset = {
  __typename?: 'Asset';
  balance: Scalars['BigDecimal']['output'];
  balances: Array<Balance>;
  /**
   * Pool ID + Token Address
   *
   */
  id: Scalars['ID']['output'];
  pool: Pool;
  token: Token;
  weight: Scalars['BigInt']['output'];
  weight_goal: Scalars['BigInt']['output'];
  weight_goal_normalized: Scalars['BigDecimal']['output'];
  weight_normalized: Scalars['BigDecimal']['output'];
};


/**
 * Information about an asset in a specific pool
 *
 */
export type AssetBalancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Balance_Filter>;
};

export type Asset_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balances_?: InputMaybe<Balance_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['BigInt']['input']>;
  weight_goal?: InputMaybe<Scalars['BigInt']['input']>;
  weight_goal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_goal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_goal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight_goal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_goal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_goal_normalized?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_goal_normalized_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_goal_normalized_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_goal_normalized_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_goal_normalized_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_goal_normalized_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_goal_normalized_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_goal_normalized_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_goal_not?: InputMaybe<Scalars['BigInt']['input']>;
  weight_goal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_normalized?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_normalized_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_not?: InputMaybe<Scalars['BigInt']['input']>;
  weight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Asset_OrderBy =
  | 'balance'
  | 'balances'
  | 'id'
  | 'pool'
  | 'token'
  | 'weight'
  | 'weight_goal'
  | 'weight_goal_normalized'
  | 'weight_normalized';

/**
 * Balance of a single token raw points graph
 *
 */
export type Balance = {
  __typename?: 'Balance';
  asset: Asset;
  /**
   * Pool ID + Token address + Timestamp
   *
   */
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  value: Scalars['BigDecimal']['output'];
};

export type Balance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_Filter>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type Balance_OrderBy =
  | 'asset'
  | 'id'
  | 'timestamp'
  | 'value';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Brokers for each pool
 *
 */
export type Broker = {
  __typename?: 'Broker';
  deposits_btc: Scalars['BigDecimal']['output'];
  deposits_usd: Scalars['BigDecimal']['output'];
  /**
   * Fees in pool tokens
   *
   */
  fees: Scalars['BigDecimal']['output'];
  fees_btc: Scalars['BigDecimal']['output'];
  fees_usd: Scalars['BigDecimal']['output'];
  /**
   * Pool ID + Broker address
   *
   */
  id: Scalars['ID']['output'];
  num_deposits: Scalars['Int']['output'];
  pool: Pool;
  unique_investors: Scalars['Int']['output'];
  wallet: Scalars['String']['output'];
};

export type Broker_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deposits_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  num_deposits?: InputMaybe<Scalars['Int']['input']>;
  num_deposits_gt?: InputMaybe<Scalars['Int']['input']>;
  num_deposits_gte?: InputMaybe<Scalars['Int']['input']>;
  num_deposits_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_deposits_lt?: InputMaybe<Scalars['Int']['input']>;
  num_deposits_lte?: InputMaybe<Scalars['Int']['input']>;
  num_deposits_not?: InputMaybe<Scalars['Int']['input']>;
  num_deposits_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unique_investors?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_gt?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_gte?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unique_investors_lt?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_lte?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_not?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  wallet?: InputMaybe<Scalars['String']['input']>;
  wallet_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_ends_with?: InputMaybe<Scalars['String']['input']>;
  wallet_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_gt?: InputMaybe<Scalars['String']['input']>;
  wallet_gte?: InputMaybe<Scalars['String']['input']>;
  wallet_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wallet_lt?: InputMaybe<Scalars['String']['input']>;
  wallet_lte?: InputMaybe<Scalars['String']['input']>;
  wallet_not?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wallet_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_starts_with?: InputMaybe<Scalars['String']['input']>;
  wallet_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Broker_OrderBy =
  | 'deposits_btc'
  | 'deposits_usd'
  | 'fees'
  | 'fees_btc'
  | 'fees_usd'
  | 'id'
  | 'num_deposits'
  | 'pool'
  | 'unique_investors'
  | 'wallet';

/**
 * OHLC price candles for periods 5m, 15m, 1h, 4h, 24h, 7d
 *
 */
export type Candle = {
  __typename?: 'Candle';
  /**
   * 'btc' or 'usd'
   *
   */
  base: Scalars['String']['output'];
  /**
   * Last value in that hour
   *
   */
  close: Scalars['BigDecimal']['output'];
  /**
   * Highest value in that hour
   *
   */
  high: Scalars['BigDecimal']['output'];
  /**
   * Pool ID + Period in seconds + Base currrency + Timestamp at start of the period
   *
   */
  id: Scalars['ID']['output'];
  /**
   * Lowest value in that hour
   *
   */
  low: Scalars['BigDecimal']['output'];
  num_tx: Scalars['Int']['output'];
  /**
   * First value in that hour
   *
   */
  open: Scalars['BigDecimal']['output'];
  /**
   * Period in seconds, available in 5m, 15m, 1h, 4h, 24h, 7d
   *
   */
  period: Scalars['Int']['output'];
  pool: Pool;
  timestamp: Scalars['Int']['output'];
};

export type Candle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  base?: InputMaybe<Scalars['String']['input']>;
  base_contains?: InputMaybe<Scalars['String']['input']>;
  base_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  base_ends_with?: InputMaybe<Scalars['String']['input']>;
  base_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  base_gt?: InputMaybe<Scalars['String']['input']>;
  base_gte?: InputMaybe<Scalars['String']['input']>;
  base_in?: InputMaybe<Array<Scalars['String']['input']>>;
  base_lt?: InputMaybe<Scalars['String']['input']>;
  base_lte?: InputMaybe<Scalars['String']['input']>;
  base_not?: InputMaybe<Scalars['String']['input']>;
  base_not_contains?: InputMaybe<Scalars['String']['input']>;
  base_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  base_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  base_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  base_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  base_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  base_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  base_starts_with?: InputMaybe<Scalars['String']['input']>;
  base_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  close?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  low?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  num_tx?: InputMaybe<Scalars['Int']['input']>;
  num_tx_gt?: InputMaybe<Scalars['Int']['input']>;
  num_tx_gte?: InputMaybe<Scalars['Int']['input']>;
  num_tx_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_tx_lt?: InputMaybe<Scalars['Int']['input']>;
  num_tx_lte?: InputMaybe<Scalars['Int']['input']>;
  num_tx_not?: InputMaybe<Scalars['Int']['input']>;
  num_tx_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  open?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  period?: InputMaybe<Scalars['Int']['input']>;
  period_gt?: InputMaybe<Scalars['Int']['input']>;
  period_gte?: InputMaybe<Scalars['Int']['input']>;
  period_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  period_lt?: InputMaybe<Scalars['Int']['input']>;
  period_lte?: InputMaybe<Scalars['Int']['input']>;
  period_not?: InputMaybe<Scalars['Int']['input']>;
  period_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Candle_OrderBy =
  | 'base'
  | 'close'
  | 'high'
  | 'id'
  | 'low'
  | 'num_tx'
  | 'open'
  | 'period'
  | 'pool'
  | 'timestamp';

/**
 * Data about the chain
 *
 */
export type Chain = {
  __typename?: 'Chain';
  address_wrapped?: Maybe<Scalars['String']['output']>;
  block_explorer_url: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pool_count: Scalars['Int']['output'];
  rpc_urls: Array<Scalars['String']['output']>;
  seconds_per_block: Scalars['Int']['output'];
  token_decimals: Scalars['Int']['output'];
  token_name: Scalars['String']['output'];
  token_symbol: Scalars['String']['output'];
};

export type Chain_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address_wrapped?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_contains?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_gt?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_gte?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_wrapped_lt?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_lte?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_not?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_wrapped_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_wrapped_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_contains?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_ends_with?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_gt?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_gte?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_in?: InputMaybe<Array<Scalars['String']['input']>>;
  block_explorer_url_lt?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_lte?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_not?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  block_explorer_url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_starts_with?: InputMaybe<Scalars['String']['input']>;
  block_explorer_url_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  icon_contains?: InputMaybe<Scalars['String']['input']>;
  icon_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  icon_ends_with?: InputMaybe<Scalars['String']['input']>;
  icon_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  icon_gt?: InputMaybe<Scalars['String']['input']>;
  icon_gte?: InputMaybe<Scalars['String']['input']>;
  icon_in?: InputMaybe<Array<Scalars['String']['input']>>;
  icon_lt?: InputMaybe<Scalars['String']['input']>;
  icon_lte?: InputMaybe<Scalars['String']['input']>;
  icon_not?: InputMaybe<Scalars['String']['input']>;
  icon_not_contains?: InputMaybe<Scalars['String']['input']>;
  icon_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  icon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  icon_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  icon_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  icon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  icon_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  icon_starts_with?: InputMaybe<Scalars['String']['input']>;
  icon_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_count?: InputMaybe<Scalars['Int']['input']>;
  pool_count_gt?: InputMaybe<Scalars['Int']['input']>;
  pool_count_gte?: InputMaybe<Scalars['Int']['input']>;
  pool_count_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool_count_lt?: InputMaybe<Scalars['Int']['input']>;
  pool_count_lte?: InputMaybe<Scalars['Int']['input']>;
  pool_count_not?: InputMaybe<Scalars['Int']['input']>;
  pool_count_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  rpc_urls?: InputMaybe<Array<Scalars['String']['input']>>;
  rpc_urls_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  rpc_urls_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  rpc_urls_not?: InputMaybe<Array<Scalars['String']['input']>>;
  rpc_urls_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  rpc_urls_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  seconds_per_block?: InputMaybe<Scalars['Int']['input']>;
  seconds_per_block_gt?: InputMaybe<Scalars['Int']['input']>;
  seconds_per_block_gte?: InputMaybe<Scalars['Int']['input']>;
  seconds_per_block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  seconds_per_block_lt?: InputMaybe<Scalars['Int']['input']>;
  seconds_per_block_lte?: InputMaybe<Scalars['Int']['input']>;
  seconds_per_block_not?: InputMaybe<Scalars['Int']['input']>;
  seconds_per_block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token_decimals?: InputMaybe<Scalars['Int']['input']>;
  token_decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  token_decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  token_decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token_decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  token_decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  token_decimals_not?: InputMaybe<Scalars['Int']['input']>;
  token_decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token_name?: InputMaybe<Scalars['String']['input']>;
  token_name_contains?: InputMaybe<Scalars['String']['input']>;
  token_name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_name_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_name_gt?: InputMaybe<Scalars['String']['input']>;
  token_name_gte?: InputMaybe<Scalars['String']['input']>;
  token_name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_name_lt?: InputMaybe<Scalars['String']['input']>;
  token_name_lte?: InputMaybe<Scalars['String']['input']>;
  token_name_not?: InputMaybe<Scalars['String']['input']>;
  token_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_name_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_symbol?: InputMaybe<Scalars['String']['input']>;
  token_symbol_contains?: InputMaybe<Scalars['String']['input']>;
  token_symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_symbol_gt?: InputMaybe<Scalars['String']['input']>;
  token_symbol_gte?: InputMaybe<Scalars['String']['input']>;
  token_symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_symbol_lt?: InputMaybe<Scalars['String']['input']>;
  token_symbol_lte?: InputMaybe<Scalars['String']['input']>;
  token_symbol_not?: InputMaybe<Scalars['String']['input']>;
  token_symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Chain_OrderBy =
  | 'address_wrapped'
  | 'block_explorer_url'
  | 'icon'
  | 'id'
  | 'name'
  | 'pool_count'
  | 'rpc_urls'
  | 'seconds_per_block'
  | 'token_decimals'
  | 'token_name'
  | 'token_symbol';

/**
 * If someone delegates their votes to someone else, this links both sides
 *
 */
export type Delegation = {
  __typename?: 'Delegation';
  from: User;
  /**
   * wallet address + pool ID
   *
   */
  id: Scalars['ID']['output'];
  pool: Scalars['BigInt']['output'];
  to: User;
  votingPower: Scalars['BigDecimal']['output'];
};

export type Delegation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<User_Filter>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['BigInt']['input']>;
  pool_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pool_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pool_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pool_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pool_not?: InputMaybe<Scalars['BigInt']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<User_Filter>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votingPower?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  votingPower_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type Delegation_OrderBy =
  | 'from'
  | 'id'
  | 'pool'
  | 'to'
  | 'votingPower';

/**
 * Fee volume per type for 1h, 1d and 7d periods (1d periods are not 24h volume as they are based from 00:00 UTC)
 *
 */
export type Fee = {
  __typename?: 'Fee';
  /**
   * Pool ID + Period + Operation type + Timestamp at start of period
   *
   */
  id: Scalars['ID']['output'];
  kassandra?: Maybe<Kassandra>;
  /**
   * Period in seconds, available in 1h, 24h, 7d
   *
   */
  period: Scalars['Int']['output'];
  pool: Pool;
  timestamp: Scalars['Int']['output'];
  /**
   * One of 'join', 'exit', 'swap' or 'aum'
   *
   */
  type: Scalars['String']['output'];
  /**
   * This value is not null only when **type** is **join**
   *
   */
  volume_broker_btc?: Maybe<Scalars['BigDecimal']['output']>;
  /**
   * This value is not null only when **type** is **join**
   *
   */
  volume_broker_usd?: Maybe<Scalars['BigDecimal']['output']>;
  volume_btc: Scalars['BigDecimal']['output'];
  volume_usd: Scalars['BigDecimal']['output'];
};

export type Fee_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  kassandra?: InputMaybe<Scalars['String']['input']>;
  kassandra_?: InputMaybe<Kassandra_Filter>;
  kassandra_contains?: InputMaybe<Scalars['String']['input']>;
  kassandra_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_ends_with?: InputMaybe<Scalars['String']['input']>;
  kassandra_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_gt?: InputMaybe<Scalars['String']['input']>;
  kassandra_gte?: InputMaybe<Scalars['String']['input']>;
  kassandra_in?: InputMaybe<Array<Scalars['String']['input']>>;
  kassandra_lt?: InputMaybe<Scalars['String']['input']>;
  kassandra_lte?: InputMaybe<Scalars['String']['input']>;
  kassandra_not?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_contains?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  kassandra_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_starts_with?: InputMaybe<Scalars['String']['input']>;
  kassandra_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  period_gt?: InputMaybe<Scalars['Int']['input']>;
  period_gte?: InputMaybe<Scalars['Int']['input']>;
  period_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  period_lt?: InputMaybe<Scalars['Int']['input']>;
  period_lte?: InputMaybe<Scalars['Int']['input']>;
  period_not?: InputMaybe<Scalars['Int']['input']>;
  period_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  volume_broker_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_broker_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_broker_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_broker_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_broker_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type Fee_OrderBy =
  | 'id'
  | 'kassandra'
  | 'period'
  | 'pool'
  | 'timestamp'
  | 'type'
  | 'volume_broker_btc'
  | 'volume_broker_usd'
  | 'volume_btc'
  | 'volume_usd';

/**
 * The governance contract that contains all the proposals and votes
 *
 */
export type Governance = {
  __typename?: 'Governance';
  /**
   * governance contract address
   *
   */
  id: Scalars['ID']['output'];
  internal_delegatee_address?: Maybe<Scalars['String']['output']>;
  internal_delegation_amount?: Maybe<Scalars['BigDecimal']['output']>;
  internal_delegation_tx_id?: Maybe<Scalars['Bytes']['output']>;
  proposals: Array<Proposal>;
  stakingPools: Scalars['Int']['output'];
  totalVotingPower: Scalars['BigDecimal']['output'];
  votingAddresses: Scalars['Int']['output'];
};


/**
 * The governance contract that contains all the proposals and votes
 *
 */
export type GovernanceProposalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Proposal_Filter>;
};

export type Governance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  internal_delegatee_address?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_contains?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_ends_with?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_gt?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_gte?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  internal_delegatee_address_lt?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_lte?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_not?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  internal_delegatee_address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_starts_with?: InputMaybe<Scalars['String']['input']>;
  internal_delegatee_address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  internal_delegation_amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  internal_delegation_amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  internal_delegation_amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  internal_delegation_amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  internal_delegation_amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  internal_delegation_amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  internal_delegation_amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  internal_delegation_amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  internal_delegation_tx_id?: InputMaybe<Scalars['Bytes']['input']>;
  internal_delegation_tx_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  internal_delegation_tx_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  internal_delegation_tx_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  internal_delegation_tx_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  internal_delegation_tx_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  proposals_?: InputMaybe<Proposal_Filter>;
  stakingPools?: InputMaybe<Scalars['Int']['input']>;
  stakingPools_gt?: InputMaybe<Scalars['Int']['input']>;
  stakingPools_gte?: InputMaybe<Scalars['Int']['input']>;
  stakingPools_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stakingPools_lt?: InputMaybe<Scalars['Int']['input']>;
  stakingPools_lte?: InputMaybe<Scalars['Int']['input']>;
  stakingPools_not?: InputMaybe<Scalars['Int']['input']>;
  stakingPools_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalVotingPower?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVotingPower_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVotingPower_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVotingPower_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVotingPower_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVotingPower_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVotingPower_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVotingPower_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  votingAddresses?: InputMaybe<Scalars['Int']['input']>;
  votingAddresses_gt?: InputMaybe<Scalars['Int']['input']>;
  votingAddresses_gte?: InputMaybe<Scalars['Int']['input']>;
  votingAddresses_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  votingAddresses_lt?: InputMaybe<Scalars['Int']['input']>;
  votingAddresses_lte?: InputMaybe<Scalars['Int']['input']>;
  votingAddresses_not?: InputMaybe<Scalars['Int']['input']>;
  votingAddresses_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Governance_OrderBy =
  | 'id'
  | 'internal_delegatee_address'
  | 'internal_delegation_amount'
  | 'internal_delegation_tx_id'
  | 'proposals'
  | 'stakingPools'
  | 'totalVotingPower'
  | 'votingAddresses';

/**
 * Holds a common array for activities and weight_goals
 *
 */
export type History = {
  __typename?: 'History';
  activity?: Maybe<Activity>;
  /**
   * ID of underlying item
   *
   */
  id: Scalars['ID']['output'];
  pool: Pool;
  timestamp: Scalars['BigInt']['output'];
  weight_goal?: Maybe<WeightGoalPoint>;
};

export type History_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activity?: InputMaybe<Scalars['String']['input']>;
  activity_?: InputMaybe<Activity_Filter>;
  activity_contains?: InputMaybe<Scalars['String']['input']>;
  activity_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  activity_ends_with?: InputMaybe<Scalars['String']['input']>;
  activity_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activity_gt?: InputMaybe<Scalars['String']['input']>;
  activity_gte?: InputMaybe<Scalars['String']['input']>;
  activity_in?: InputMaybe<Array<Scalars['String']['input']>>;
  activity_lt?: InputMaybe<Scalars['String']['input']>;
  activity_lte?: InputMaybe<Scalars['String']['input']>;
  activity_not?: InputMaybe<Scalars['String']['input']>;
  activity_not_contains?: InputMaybe<Scalars['String']['input']>;
  activity_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  activity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  activity_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activity_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  activity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  activity_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activity_starts_with?: InputMaybe<Scalars['String']['input']>;
  activity_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight_goal?: InputMaybe<Scalars['String']['input']>;
  weight_goal_?: InputMaybe<WeightGoalPoint_Filter>;
  weight_goal_contains?: InputMaybe<Scalars['String']['input']>;
  weight_goal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  weight_goal_ends_with?: InputMaybe<Scalars['String']['input']>;
  weight_goal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  weight_goal_gt?: InputMaybe<Scalars['String']['input']>;
  weight_goal_gte?: InputMaybe<Scalars['String']['input']>;
  weight_goal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  weight_goal_lt?: InputMaybe<Scalars['String']['input']>;
  weight_goal_lte?: InputMaybe<Scalars['String']['input']>;
  weight_goal_not?: InputMaybe<Scalars['String']['input']>;
  weight_goal_not_contains?: InputMaybe<Scalars['String']['input']>;
  weight_goal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  weight_goal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  weight_goal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  weight_goal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  weight_goal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  weight_goal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  weight_goal_starts_with?: InputMaybe<Scalars['String']['input']>;
  weight_goal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type History_OrderBy =
  | 'activity'
  | 'id'
  | 'pool'
  | 'timestamp'
  | 'weight_goal';

/**
 * Investors in a pool
 *
 */
export type Investor = {
  __typename?: 'Investor';
  /**
   * Current amount of pool tokens
   *
   */
  amount: Scalars['BigDecimal']['output'];
  /**
   * Amount of pool tokens the user ever received
   *
   */
  amount_alltime: Scalars['BigDecimal']['output'];
  /**
   * Largest amount of pool tokens the user ever had
   *
   */
  amount_largest: Scalars['BigDecimal']['output'];
  /**
   * If the first deposit was from a broker this won't be null
   *
   */
  broker?: Maybe<Broker>;
  first_deposit_timestamp: Scalars['Int']['output'];
  /**
   * Pool ID + Wallet address
   *
   */
  id: Scalars['ID']['output'];
  last_deposit_timestamp: Scalars['Int']['output'];
  pool: Pool;
  wallet: Scalars['String']['output'];
};

export type Investor_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_alltime?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_alltime_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_alltime_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_alltime_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_alltime_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_alltime_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_alltime_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_alltime_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_largest?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_largest_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_largest_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_largest_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_largest_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_largest_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_largest_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_largest_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  broker?: InputMaybe<Scalars['String']['input']>;
  broker_?: InputMaybe<Broker_Filter>;
  broker_contains?: InputMaybe<Scalars['String']['input']>;
  broker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  broker_ends_with?: InputMaybe<Scalars['String']['input']>;
  broker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  broker_gt?: InputMaybe<Scalars['String']['input']>;
  broker_gte?: InputMaybe<Scalars['String']['input']>;
  broker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  broker_lt?: InputMaybe<Scalars['String']['input']>;
  broker_lte?: InputMaybe<Scalars['String']['input']>;
  broker_not?: InputMaybe<Scalars['String']['input']>;
  broker_not_contains?: InputMaybe<Scalars['String']['input']>;
  broker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  broker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  broker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  broker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  broker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  broker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  broker_starts_with?: InputMaybe<Scalars['String']['input']>;
  broker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  first_deposit_timestamp?: InputMaybe<Scalars['Int']['input']>;
  first_deposit_timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  first_deposit_timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  first_deposit_timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  first_deposit_timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  first_deposit_timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  first_deposit_timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  first_deposit_timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  last_deposit_timestamp?: InputMaybe<Scalars['Int']['input']>;
  last_deposit_timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  last_deposit_timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  last_deposit_timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  last_deposit_timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  last_deposit_timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  last_deposit_timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  last_deposit_timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet?: InputMaybe<Scalars['String']['input']>;
  wallet_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_ends_with?: InputMaybe<Scalars['String']['input']>;
  wallet_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_gt?: InputMaybe<Scalars['String']['input']>;
  wallet_gte?: InputMaybe<Scalars['String']['input']>;
  wallet_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wallet_lt?: InputMaybe<Scalars['String']['input']>;
  wallet_lte?: InputMaybe<Scalars['String']['input']>;
  wallet_not?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wallet_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_starts_with?: InputMaybe<Scalars['String']['input']>;
  wallet_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Investor_OrderBy =
  | 'amount'
  | 'amount_alltime'
  | 'amount_largest'
  | 'broker'
  | 'first_deposit_timestamp'
  | 'id'
  | 'last_deposit_timestamp'
  | 'pool'
  | 'wallet';

/**
 * General data about the whole Kassandra
 *
 */
export type Kassandra = {
  __typename?: 'Kassandra';
  deposits_btc: Scalars['BigDecimal']['output'];
  deposits_usd: Scalars['BigDecimal']['output'];
  fee_aum_kassandra: Scalars['BigDecimal']['output'];
  fees: Array<Fee>;
  id: Scalars['ID']['output'];
  num_deposits: Scalars['BigInt']['output'];
  num_managers: Scalars['Int']['output'];
  num_tx: Scalars['BigInt']['output'];
  pool_count: Scalars['Int']['output'];
  total_fees_aum_kassandra_btc: Scalars['BigDecimal']['output'];
  total_fees_aum_kassandra_usd: Scalars['BigDecimal']['output'];
  total_fees_aum_manager_btc: Scalars['BigDecimal']['output'];
  total_fees_aum_manager_usd: Scalars['BigDecimal']['output'];
  total_fees_exit_btc: Scalars['BigDecimal']['output'];
  total_fees_exit_usd: Scalars['BigDecimal']['output'];
  total_fees_join_broker_btc: Scalars['BigDecimal']['output'];
  total_fees_join_broker_usd: Scalars['BigDecimal']['output'];
  total_fees_join_manager_btc: Scalars['BigDecimal']['output'];
  total_fees_join_manager_usd: Scalars['BigDecimal']['output'];
  total_fees_swap_btc: Scalars['BigDecimal']['output'];
  total_fees_swap_usd: Scalars['BigDecimal']['output'];
  total_value_locked_btc: Scalars['BigDecimal']['output'];
  total_value_locked_usd: Scalars['BigDecimal']['output'];
  total_volume_btc: Scalars['BigDecimal']['output'];
  total_volume_usd: Scalars['BigDecimal']['output'];
  volumes: Array<Volume>;
};


/**
 * General data about the whole Kassandra
 *
 */
export type KassandraFeesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Fee_Filter>;
};


/**
 * General data about the whole Kassandra
 *
 */
export type KassandraVolumesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Volume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Volume_Filter>;
};

export type Kassandra_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deposits_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_aum_kassandra?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_aum_kassandra_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees_?: InputMaybe<Fee_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  num_deposits?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_deposits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_not?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_managers?: InputMaybe<Scalars['Int']['input']>;
  num_managers_gt?: InputMaybe<Scalars['Int']['input']>;
  num_managers_gte?: InputMaybe<Scalars['Int']['input']>;
  num_managers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_managers_lt?: InputMaybe<Scalars['Int']['input']>;
  num_managers_lte?: InputMaybe<Scalars['Int']['input']>;
  num_managers_not?: InputMaybe<Scalars['Int']['input']>;
  num_managers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_tx?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_gt?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_gte?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_tx_lt?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_lte?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_not?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool_count?: InputMaybe<Scalars['Int']['input']>;
  pool_count_gt?: InputMaybe<Scalars['Int']['input']>;
  pool_count_gte?: InputMaybe<Scalars['Int']['input']>;
  pool_count_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool_count_lt?: InputMaybe<Scalars['Int']['input']>;
  pool_count_lte?: InputMaybe<Scalars['Int']['input']>;
  pool_count_not?: InputMaybe<Scalars['Int']['input']>;
  pool_count_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  total_fees_aum_kassandra_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_kassandra_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_kassandra_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_kassandra_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_swap_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_swap_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_swap_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_swap_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_volume_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_volume_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_volume_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_volume_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumes_?: InputMaybe<Volume_Filter>;
};

export type Kassandra_OrderBy =
  | 'deposits_btc'
  | 'deposits_usd'
  | 'fee_aum_kassandra'
  | 'fees'
  | 'id'
  | 'num_deposits'
  | 'num_managers'
  | 'num_tx'
  | 'pool_count'
  | 'total_fees_aum_kassandra_btc'
  | 'total_fees_aum_kassandra_usd'
  | 'total_fees_aum_manager_btc'
  | 'total_fees_aum_manager_usd'
  | 'total_fees_exit_btc'
  | 'total_fees_exit_usd'
  | 'total_fees_join_broker_btc'
  | 'total_fees_join_broker_usd'
  | 'total_fees_join_manager_btc'
  | 'total_fees_join_manager_usd'
  | 'total_fees_swap_btc'
  | 'total_fees_swap_usd'
  | 'total_value_locked_btc'
  | 'total_value_locked_usd'
  | 'total_volume_btc'
  | 'total_volume_usd'
  | 'volumes';

/**
 * Every manager of a pool in Kassandra
 *
 */
export type Manager = {
  __typename?: 'Manager';
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  /**
   * Wallet address
   *
   */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  is_nft?: Maybe<Scalars['Boolean']['output']>;
  nft_chain?: Maybe<Scalars['String']['output']>;
  nft_collection_name?: Maybe<Scalars['String']['output']>;
  nft_contract_type?: Maybe<Scalars['String']['output']>;
  nft_description?: Maybe<Scalars['String']['output']>;
  nft_name?: Maybe<Scalars['String']['output']>;
  nft_symbol?: Maybe<Scalars['String']['output']>;
  nft_token_address?: Maybe<Scalars['String']['output']>;
  nft_token_num?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  pool_count: Scalars['Int']['output'];
  pools: Array<Pool>;
  telegram?: Maybe<Scalars['String']['output']>;
  total_value_locked: Array<TotalValueLocked>;
  total_value_locked_btc: Scalars['BigDecimal']['output'];
  total_value_locked_usd: Scalars['BigDecimal']['output'];
  twitter?: Maybe<Scalars['String']['output']>;
  unique_investors: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  volumes: Array<Volume>;
  website?: Maybe<Scalars['String']['output']>;
};


/**
 * Every manager of a pool in Kassandra
 *
 */
export type ManagerPoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Pool_Filter>;
};


/**
 * Every manager of a pool in Kassandra
 *
 */
export type ManagerTotal_Value_LockedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TotalValueLocked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TotalValueLocked_Filter>;
};


/**
 * Every manager of a pool in Kassandra
 *
 */
export type ManagerVolumesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Volume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Volume_Filter>;
};

export type Manager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_at_contains?: InputMaybe<Scalars['String']['input']>;
  created_at_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_ends_with?: InputMaybe<Scalars['String']['input']>;
  created_at_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_gt?: InputMaybe<Scalars['String']['input']>;
  created_at_gte?: InputMaybe<Scalars['String']['input']>;
  created_at_in?: InputMaybe<Array<Scalars['String']['input']>>;
  created_at_lt?: InputMaybe<Scalars['String']['input']>;
  created_at_lte?: InputMaybe<Scalars['String']['input']>;
  created_at_not?: InputMaybe<Scalars['String']['input']>;
  created_at_not_contains?: InputMaybe<Scalars['String']['input']>;
  created_at_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  created_at_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  created_at_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  created_at_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_starts_with?: InputMaybe<Scalars['String']['input']>;
  created_at_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  discord?: InputMaybe<Scalars['String']['input']>;
  discord_contains?: InputMaybe<Scalars['String']['input']>;
  discord_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_ends_with?: InputMaybe<Scalars['String']['input']>;
  discord_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_gt?: InputMaybe<Scalars['String']['input']>;
  discord_gte?: InputMaybe<Scalars['String']['input']>;
  discord_in?: InputMaybe<Array<Scalars['String']['input']>>;
  discord_lt?: InputMaybe<Scalars['String']['input']>;
  discord_lte?: InputMaybe<Scalars['String']['input']>;
  discord_not?: InputMaybe<Scalars['String']['input']>;
  discord_not_contains?: InputMaybe<Scalars['String']['input']>;
  discord_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  discord_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  discord_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  discord_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_starts_with?: InputMaybe<Scalars['String']['input']>;
  discord_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  is_nft?: InputMaybe<Scalars['Boolean']['input']>;
  is_nft_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is_nft_not?: InputMaybe<Scalars['Boolean']['input']>;
  is_nft_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  nft_chain?: InputMaybe<Scalars['String']['input']>;
  nft_chain_contains?: InputMaybe<Scalars['String']['input']>;
  nft_chain_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_chain_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_gt?: InputMaybe<Scalars['String']['input']>;
  nft_chain_gte?: InputMaybe<Scalars['String']['input']>;
  nft_chain_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_chain_lt?: InputMaybe<Scalars['String']['input']>;
  nft_chain_lte?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_chain_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_chain_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_contains?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_gt?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_gte?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_collection_name_lt?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_lte?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_collection_name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_gt?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_gte?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_contract_type_lt?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_lte?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_contract_type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description?: InputMaybe<Scalars['String']['input']>;
  nft_description_contains?: InputMaybe<Scalars['String']['input']>;
  nft_description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_gt?: InputMaybe<Scalars['String']['input']>;
  nft_description_gte?: InputMaybe<Scalars['String']['input']>;
  nft_description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_description_lt?: InputMaybe<Scalars['String']['input']>;
  nft_description_lte?: InputMaybe<Scalars['String']['input']>;
  nft_description_not?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name?: InputMaybe<Scalars['String']['input']>;
  nft_name_contains?: InputMaybe<Scalars['String']['input']>;
  nft_name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_gt?: InputMaybe<Scalars['String']['input']>;
  nft_name_gte?: InputMaybe<Scalars['String']['input']>;
  nft_name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_name_lt?: InputMaybe<Scalars['String']['input']>;
  nft_name_lte?: InputMaybe<Scalars['String']['input']>;
  nft_name_not?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_contains?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_gt?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_gte?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_symbol_lt?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_lte?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_contains?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_gt?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_gte?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_token_address_lt?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_lte?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_token_address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_contains?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_gt?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_gte?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_token_num_lt?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_lte?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_token_num_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  nickname_contains?: InputMaybe<Scalars['String']['input']>;
  nickname_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_ends_with?: InputMaybe<Scalars['String']['input']>;
  nickname_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_gt?: InputMaybe<Scalars['String']['input']>;
  nickname_gte?: InputMaybe<Scalars['String']['input']>;
  nickname_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nickname_lt?: InputMaybe<Scalars['String']['input']>;
  nickname_lte?: InputMaybe<Scalars['String']['input']>;
  nickname_not?: InputMaybe<Scalars['String']['input']>;
  nickname_not_contains?: InputMaybe<Scalars['String']['input']>;
  nickname_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nickname_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nickname_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nickname_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_starts_with?: InputMaybe<Scalars['String']['input']>;
  nickname_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_count?: InputMaybe<Scalars['Int']['input']>;
  pool_count_gt?: InputMaybe<Scalars['Int']['input']>;
  pool_count_gte?: InputMaybe<Scalars['Int']['input']>;
  pool_count_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool_count_lt?: InputMaybe<Scalars['Int']['input']>;
  pool_count_lte?: InputMaybe<Scalars['Int']['input']>;
  pool_count_not?: InputMaybe<Scalars['Int']['input']>;
  pool_count_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pools_?: InputMaybe<Pool_Filter>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  telegram_contains?: InputMaybe<Scalars['String']['input']>;
  telegram_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_ends_with?: InputMaybe<Scalars['String']['input']>;
  telegram_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_gt?: InputMaybe<Scalars['String']['input']>;
  telegram_gte?: InputMaybe<Scalars['String']['input']>;
  telegram_in?: InputMaybe<Array<Scalars['String']['input']>>;
  telegram_lt?: InputMaybe<Scalars['String']['input']>;
  telegram_lte?: InputMaybe<Scalars['String']['input']>;
  telegram_not?: InputMaybe<Scalars['String']['input']>;
  telegram_not_contains?: InputMaybe<Scalars['String']['input']>;
  telegram_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  telegram_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  telegram_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  telegram_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_starts_with?: InputMaybe<Scalars['String']['input']>;
  telegram_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  total_value_locked_?: InputMaybe<TotalValueLocked_Filter>;
  total_value_locked_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  twitter_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  twitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_gt?: InputMaybe<Scalars['String']['input']>;
  twitter_gte?: InputMaybe<Scalars['String']['input']>;
  twitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  twitter_lt?: InputMaybe<Scalars['String']['input']>;
  twitter_lte?: InputMaybe<Scalars['String']['input']>;
  twitter_not?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  twitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  twitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  twitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  twitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unique_investors?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_gt?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_gte?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unique_investors_lt?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_lte?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_not?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_at_contains?: InputMaybe<Scalars['String']['input']>;
  updated_at_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_ends_with?: InputMaybe<Scalars['String']['input']>;
  updated_at_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_gt?: InputMaybe<Scalars['String']['input']>;
  updated_at_gte?: InputMaybe<Scalars['String']['input']>;
  updated_at_in?: InputMaybe<Array<Scalars['String']['input']>>;
  updated_at_lt?: InputMaybe<Scalars['String']['input']>;
  updated_at_lte?: InputMaybe<Scalars['String']['input']>;
  updated_at_not?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_contains?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  updated_at_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_starts_with?: InputMaybe<Scalars['String']['input']>;
  updated_at_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  volumes_?: InputMaybe<Volume_Filter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  website_ends_with?: InputMaybe<Scalars['String']['input']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_gt?: InputMaybe<Scalars['String']['input']>;
  website_gte?: InputMaybe<Scalars['String']['input']>;
  website_in?: InputMaybe<Array<Scalars['String']['input']>>;
  website_lt?: InputMaybe<Scalars['String']['input']>;
  website_lte?: InputMaybe<Scalars['String']['input']>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  website_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_starts_with?: InputMaybe<Scalars['String']['input']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Manager_OrderBy =
  | 'created_at'
  | 'description'
  | 'discord'
  | 'id'
  | 'image'
  | 'is_nft'
  | 'nft_chain'
  | 'nft_collection_name'
  | 'nft_contract_type'
  | 'nft_description'
  | 'nft_name'
  | 'nft_symbol'
  | 'nft_token_address'
  | 'nft_token_num'
  | 'nickname'
  | 'pool_count'
  | 'pools'
  | 'telegram'
  | 'total_value_locked'
  | 'total_value_locked_btc'
  | 'total_value_locked_usd'
  | 'twitter'
  | 'unique_investors'
  | 'updated_at'
  | 'user'
  | 'volumes'
  | 'website';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

/**
 * Every pool in the protocol
 *
 */
export type Pool = {
  __typename?: 'Pool';
  _investors: Array<Scalars['String']['output']>;
  activities: Array<Activity>;
  /**
   * Address of the ERC20 token
   *
   */
  address: Scalars['String']['output'];
  brokers: Array<Broker>;
  chain: Chain;
  chain_id: Scalars['Int']['output'];
  /**
   * Controller contract that controls the vault
   *
   */
  controller: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  deposits_broker_btc: Scalars['BigDecimal']['output'];
  deposits_broker_usd: Scalars['BigDecimal']['output'];
  deposits_btc: Scalars['BigDecimal']['output'];
  deposits_usd: Scalars['BigDecimal']['output'];
  /**
   * Factory that created this pool
   *
   */
  factory: Scalars['String']['output'];
  featured?: Maybe<Scalars['Boolean']['output']>;
  fee_aum: Scalars['BigDecimal']['output'];
  fee_aum_kassandra: Scalars['BigDecimal']['output'];
  fee_exit: Scalars['BigDecimal']['output'];
  fee_join_broker: Scalars['BigDecimal']['output'];
  fee_join_manager: Scalars['BigDecimal']['output'];
  fee_swap: Scalars['BigDecimal']['output'];
  fees: Array<Fee>;
  founded_by?: Maybe<Scalars['String']['output']>;
  history: Array<History>;
  /**
   * Chain ID + Pool Vault ID
   *
   */
  id: Scalars['ID']['output'];
  investors: Array<Investor>;
  is_private_pool: Scalars['Boolean']['output'];
  last_harvest?: Maybe<Scalars['BigInt']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  /**
   * Address that controls the controlller
   *
   */
  manager: Manager;
  name: Scalars['String']['output'];
  num_activities: Scalars['Int']['output'];
  num_brokers: Scalars['Int']['output'];
  num_deposits: Scalars['BigInt']['output'];
  num_deposits_broker: Scalars['BigInt']['output'];
  num_exit: Scalars['BigInt']['output'];
  num_join: Scalars['BigInt']['output'];
  num_swap: Scalars['BigInt']['output'];
  num_token_add: Scalars['Int']['output'];
  num_token_remove: Scalars['Int']['output'];
  num_tx: Scalars['BigInt']['output'];
  num_weight_goals: Scalars['Int']['output'];
  pool_id?: Maybe<Scalars['Int']['output']>;
  pool_version: Scalars['Int']['output'];
  price_btc: Scalars['BigDecimal']['output'];
  price_candles: Array<Candle>;
  price_usd: Scalars['BigDecimal']['output'];
  /**
   * Address that can manage the assets in the pool
   *
   */
  strategy: Scalars['String']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  supply: Scalars['BigDecimal']['output'];
  supply_changes: Array<PoolSupply>;
  symbol: Scalars['String']['output'];
  total_fees_aum_kassandra: Scalars['BigDecimal']['output'];
  total_fees_aum_kassandra_btc: Scalars['BigDecimal']['output'];
  total_fees_aum_kassandra_usd: Scalars['BigDecimal']['output'];
  total_fees_aum_manager: Scalars['BigDecimal']['output'];
  total_fees_aum_manager_btc: Scalars['BigDecimal']['output'];
  total_fees_aum_manager_usd: Scalars['BigDecimal']['output'];
  total_fees_exit: Scalars['BigDecimal']['output'];
  total_fees_exit_btc: Scalars['BigDecimal']['output'];
  total_fees_exit_usd: Scalars['BigDecimal']['output'];
  total_fees_join_broker: Scalars['BigDecimal']['output'];
  total_fees_join_broker_btc: Scalars['BigDecimal']['output'];
  total_fees_join_broker_usd: Scalars['BigDecimal']['output'];
  total_fees_join_manager: Scalars['BigDecimal']['output'];
  total_fees_join_manager_btc: Scalars['BigDecimal']['output'];
  total_fees_join_manager_usd: Scalars['BigDecimal']['output'];
  total_fees_swap_btc: Scalars['BigDecimal']['output'];
  total_fees_swap_usd: Scalars['BigDecimal']['output'];
  total_value_locked: Array<TotalValueLocked>;
  total_value_locked_btc: Scalars['BigDecimal']['output'];
  total_value_locked_usd: Scalars['BigDecimal']['output'];
  total_volume_btc: Scalars['BigDecimal']['output'];
  total_volume_usd: Scalars['BigDecimal']['output'];
  underlying_assets: Array<Asset>;
  underlying_assets_addresses: Array<Scalars['String']['output']>;
  /**
   * Current amount of unique investors in the pool
   *
   */
  unique_investors: Scalars['Int']['output'];
  /**
   * Current amount of unique investors in the pool that made their first investment through a broker
   *
   */
  unique_investors_broker: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
  /**
   * Contract that holds the tokens
   *
   */
  vault: Scalars['String']['output'];
  /**
   * ID of pool inside the vault
   *
   */
  vault_id: Scalars['String']['output'];
  volumes: Array<Volume>;
  weight_goals: Array<WeightGoalPoint>;
  weights: Array<WeightPoint>;
  /**
   * Contract that contains a list of tokens the manager can add to the pool
   *
   */
  whitelist: Scalars['String']['output'];
};


/**
 * Every pool in the protocol
 *
 */
export type PoolActivitiesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Activity_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolBrokersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Broker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Broker_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolFeesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Fee_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<History_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<History_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolInvestorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Investor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Investor_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolPrice_CandlesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Candle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Candle_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolSupply_ChangesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolSupply_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolTotal_Value_LockedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TotalValueLocked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TotalValueLocked_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolUnderlying_AssetsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Asset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Asset_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolVolumesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Volume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Volume_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolWeight_GoalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightGoalPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WeightGoalPoint_Filter>;
};


/**
 * Every pool in the protocol
 *
 */
export type PoolWeightsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WeightPoint_Filter>;
};

/**
 * Pool supply raw points graph
 *
 */
export type PoolSupply = {
  __typename?: 'PoolSupply';
  block: Scalars['BigInt']['output'];
  block_hash: Scalars['Bytes']['output'];
  /**
   * Transaction hash
   *
   */
  id: Scalars['ID']['output'];
  pool: Pool;
  timestamp: Scalars['Int']['output'];
  value: Scalars['BigDecimal']['output'];
};

export type PoolSupply_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_hash?: InputMaybe<Scalars['Bytes']['input']>;
  block_hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  block_hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  block_hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  block_hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  block_hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type PoolSupply_OrderBy =
  | 'block'
  | 'block_hash'
  | 'id'
  | 'pool'
  | 'timestamp'
  | 'value';

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _investors?: InputMaybe<Array<Scalars['String']['input']>>;
  _investors_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _investors_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  _investors_not?: InputMaybe<Array<Scalars['String']['input']>>;
  _investors_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _investors_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  activities_?: InputMaybe<Activity_Filter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  brokers_?: InputMaybe<Broker_Filter>;
  chain?: InputMaybe<Scalars['String']['input']>;
  chain_?: InputMaybe<Chain_Filter>;
  chain_contains?: InputMaybe<Scalars['String']['input']>;
  chain_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chain_ends_with?: InputMaybe<Scalars['String']['input']>;
  chain_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chain_gt?: InputMaybe<Scalars['String']['input']>;
  chain_gte?: InputMaybe<Scalars['String']['input']>;
  chain_id?: InputMaybe<Scalars['Int']['input']>;
  chain_id_gt?: InputMaybe<Scalars['Int']['input']>;
  chain_id_gte?: InputMaybe<Scalars['Int']['input']>;
  chain_id_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  chain_id_lt?: InputMaybe<Scalars['Int']['input']>;
  chain_id_lte?: InputMaybe<Scalars['Int']['input']>;
  chain_id_not?: InputMaybe<Scalars['Int']['input']>;
  chain_id_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  chain_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chain_lt?: InputMaybe<Scalars['String']['input']>;
  chain_lte?: InputMaybe<Scalars['String']['input']>;
  chain_not?: InputMaybe<Scalars['String']['input']>;
  chain_not_contains?: InputMaybe<Scalars['String']['input']>;
  chain_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  chain_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  chain_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chain_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  chain_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  chain_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  chain_starts_with?: InputMaybe<Scalars['String']['input']>;
  chain_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  controller?: InputMaybe<Scalars['String']['input']>;
  controller_contains?: InputMaybe<Scalars['String']['input']>;
  controller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_ends_with?: InputMaybe<Scalars['String']['input']>;
  controller_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_gt?: InputMaybe<Scalars['String']['input']>;
  controller_gte?: InputMaybe<Scalars['String']['input']>;
  controller_in?: InputMaybe<Array<Scalars['String']['input']>>;
  controller_lt?: InputMaybe<Scalars['String']['input']>;
  controller_lte?: InputMaybe<Scalars['String']['input']>;
  controller_not?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  controller_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  controller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  controller_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_starts_with?: InputMaybe<Scalars['String']['input']>;
  controller_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deposits_broker_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_broker_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_broker_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_broker_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_broker_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deposits_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  deposits_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  factory?: InputMaybe<Scalars['String']['input']>;
  factory_contains?: InputMaybe<Scalars['String']['input']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  factory_ends_with?: InputMaybe<Scalars['String']['input']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  factory_gt?: InputMaybe<Scalars['String']['input']>;
  factory_gte?: InputMaybe<Scalars['String']['input']>;
  factory_in?: InputMaybe<Array<Scalars['String']['input']>>;
  factory_lt?: InputMaybe<Scalars['String']['input']>;
  factory_lte?: InputMaybe<Scalars['String']['input']>;
  factory_not?: InputMaybe<Scalars['String']['input']>;
  factory_not_contains?: InputMaybe<Scalars['String']['input']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  factory_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  factory_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  factory_starts_with?: InputMaybe<Scalars['String']['input']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  featured_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  featured_not?: InputMaybe<Scalars['Boolean']['input']>;
  featured_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  fee_aum?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_aum_kassandra?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_aum_kassandra_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_kassandra_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_aum_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_aum_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_exit?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_exit_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_exit_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_exit_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_exit_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_exit_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_exit_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_exit_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_join_broker?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_broker_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_broker_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_broker_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_join_broker_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_broker_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_broker_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_broker_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_join_manager?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_manager_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_manager_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_manager_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_join_manager_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_manager_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_manager_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_join_manager_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_swap?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_swap_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_swap_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_swap_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee_swap_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_swap_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_swap_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  fee_swap_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees_?: InputMaybe<Fee_Filter>;
  founded_by?: InputMaybe<Scalars['String']['input']>;
  founded_by_contains?: InputMaybe<Scalars['String']['input']>;
  founded_by_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  founded_by_ends_with?: InputMaybe<Scalars['String']['input']>;
  founded_by_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  founded_by_gt?: InputMaybe<Scalars['String']['input']>;
  founded_by_gte?: InputMaybe<Scalars['String']['input']>;
  founded_by_in?: InputMaybe<Array<Scalars['String']['input']>>;
  founded_by_lt?: InputMaybe<Scalars['String']['input']>;
  founded_by_lte?: InputMaybe<Scalars['String']['input']>;
  founded_by_not?: InputMaybe<Scalars['String']['input']>;
  founded_by_not_contains?: InputMaybe<Scalars['String']['input']>;
  founded_by_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  founded_by_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  founded_by_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  founded_by_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  founded_by_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  founded_by_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  founded_by_starts_with?: InputMaybe<Scalars['String']['input']>;
  founded_by_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  history_?: InputMaybe<History_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  investors_?: InputMaybe<Investor_Filter>;
  is_private_pool?: InputMaybe<Scalars['Boolean']['input']>;
  is_private_pool_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is_private_pool_not?: InputMaybe<Scalars['Boolean']['input']>;
  is_private_pool_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  last_harvest?: InputMaybe<Scalars['BigInt']['input']>;
  last_harvest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  last_harvest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  last_harvest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  last_harvest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  last_harvest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  last_harvest_not?: InputMaybe<Scalars['BigInt']['input']>;
  last_harvest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logo?: InputMaybe<Scalars['String']['input']>;
  logo_contains?: InputMaybe<Scalars['String']['input']>;
  logo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_ends_with?: InputMaybe<Scalars['String']['input']>;
  logo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_gt?: InputMaybe<Scalars['String']['input']>;
  logo_gte?: InputMaybe<Scalars['String']['input']>;
  logo_in?: InputMaybe<Array<Scalars['String']['input']>>;
  logo_lt?: InputMaybe<Scalars['String']['input']>;
  logo_lte?: InputMaybe<Scalars['String']['input']>;
  logo_not?: InputMaybe<Scalars['String']['input']>;
  logo_not_contains?: InputMaybe<Scalars['String']['input']>;
  logo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  logo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  logo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  logo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_starts_with?: InputMaybe<Scalars['String']['input']>;
  logo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<Manager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  num_activities?: InputMaybe<Scalars['Int']['input']>;
  num_activities_gt?: InputMaybe<Scalars['Int']['input']>;
  num_activities_gte?: InputMaybe<Scalars['Int']['input']>;
  num_activities_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_activities_lt?: InputMaybe<Scalars['Int']['input']>;
  num_activities_lte?: InputMaybe<Scalars['Int']['input']>;
  num_activities_not?: InputMaybe<Scalars['Int']['input']>;
  num_activities_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_brokers?: InputMaybe<Scalars['Int']['input']>;
  num_brokers_gt?: InputMaybe<Scalars['Int']['input']>;
  num_brokers_gte?: InputMaybe<Scalars['Int']['input']>;
  num_brokers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_brokers_lt?: InputMaybe<Scalars['Int']['input']>;
  num_brokers_lte?: InputMaybe<Scalars['Int']['input']>;
  num_brokers_not?: InputMaybe<Scalars['Int']['input']>;
  num_brokers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_deposits?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_broker?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_broker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_broker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_broker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_deposits_broker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_broker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_broker_not?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_broker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_deposits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_deposits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_not?: InputMaybe<Scalars['BigInt']['input']>;
  num_deposits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_exit?: InputMaybe<Scalars['BigInt']['input']>;
  num_exit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  num_exit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  num_exit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_exit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  num_exit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  num_exit_not?: InputMaybe<Scalars['BigInt']['input']>;
  num_exit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_join?: InputMaybe<Scalars['BigInt']['input']>;
  num_join_gt?: InputMaybe<Scalars['BigInt']['input']>;
  num_join_gte?: InputMaybe<Scalars['BigInt']['input']>;
  num_join_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_join_lt?: InputMaybe<Scalars['BigInt']['input']>;
  num_join_lte?: InputMaybe<Scalars['BigInt']['input']>;
  num_join_not?: InputMaybe<Scalars['BigInt']['input']>;
  num_join_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_swap?: InputMaybe<Scalars['BigInt']['input']>;
  num_swap_gt?: InputMaybe<Scalars['BigInt']['input']>;
  num_swap_gte?: InputMaybe<Scalars['BigInt']['input']>;
  num_swap_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_swap_lt?: InputMaybe<Scalars['BigInt']['input']>;
  num_swap_lte?: InputMaybe<Scalars['BigInt']['input']>;
  num_swap_not?: InputMaybe<Scalars['BigInt']['input']>;
  num_swap_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_token_add?: InputMaybe<Scalars['Int']['input']>;
  num_token_add_gt?: InputMaybe<Scalars['Int']['input']>;
  num_token_add_gte?: InputMaybe<Scalars['Int']['input']>;
  num_token_add_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_token_add_lt?: InputMaybe<Scalars['Int']['input']>;
  num_token_add_lte?: InputMaybe<Scalars['Int']['input']>;
  num_token_add_not?: InputMaybe<Scalars['Int']['input']>;
  num_token_add_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_token_remove?: InputMaybe<Scalars['Int']['input']>;
  num_token_remove_gt?: InputMaybe<Scalars['Int']['input']>;
  num_token_remove_gte?: InputMaybe<Scalars['Int']['input']>;
  num_token_remove_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_token_remove_lt?: InputMaybe<Scalars['Int']['input']>;
  num_token_remove_lte?: InputMaybe<Scalars['Int']['input']>;
  num_token_remove_not?: InputMaybe<Scalars['Int']['input']>;
  num_token_remove_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_tx?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_gt?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_gte?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_tx_lt?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_lte?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_not?: InputMaybe<Scalars['BigInt']['input']>;
  num_tx_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  num_weight_goals?: InputMaybe<Scalars['Int']['input']>;
  num_weight_goals_gt?: InputMaybe<Scalars['Int']['input']>;
  num_weight_goals_gte?: InputMaybe<Scalars['Int']['input']>;
  num_weight_goals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_weight_goals_lt?: InputMaybe<Scalars['Int']['input']>;
  num_weight_goals_lte?: InputMaybe<Scalars['Int']['input']>;
  num_weight_goals_not?: InputMaybe<Scalars['Int']['input']>;
  num_weight_goals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool_id?: InputMaybe<Scalars['Int']['input']>;
  pool_id_gt?: InputMaybe<Scalars['Int']['input']>;
  pool_id_gte?: InputMaybe<Scalars['Int']['input']>;
  pool_id_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool_id_lt?: InputMaybe<Scalars['Int']['input']>;
  pool_id_lte?: InputMaybe<Scalars['Int']['input']>;
  pool_id_not?: InputMaybe<Scalars['Int']['input']>;
  pool_id_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool_version?: InputMaybe<Scalars['Int']['input']>;
  pool_version_gt?: InputMaybe<Scalars['Int']['input']>;
  pool_version_gte?: InputMaybe<Scalars['Int']['input']>;
  pool_version_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool_version_lt?: InputMaybe<Scalars['Int']['input']>;
  pool_version_lte?: InputMaybe<Scalars['Int']['input']>;
  pool_version_not?: InputMaybe<Scalars['Int']['input']>;
  pool_version_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  price_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_candles_?: InputMaybe<Candle_Filter>;
  price_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  strategy_contains?: InputMaybe<Scalars['String']['input']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_gt?: InputMaybe<Scalars['String']['input']>;
  strategy_gte?: InputMaybe<Scalars['String']['input']>;
  strategy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategy_lt?: InputMaybe<Scalars['String']['input']>;
  strategy_lte?: InputMaybe<Scalars['String']['input']>;
  strategy_not?: InputMaybe<Scalars['String']['input']>;
  strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summary_contains?: InputMaybe<Scalars['String']['input']>;
  summary_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_ends_with?: InputMaybe<Scalars['String']['input']>;
  summary_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_gt?: InputMaybe<Scalars['String']['input']>;
  summary_gte?: InputMaybe<Scalars['String']['input']>;
  summary_in?: InputMaybe<Array<Scalars['String']['input']>>;
  summary_lt?: InputMaybe<Scalars['String']['input']>;
  summary_lte?: InputMaybe<Scalars['String']['input']>;
  summary_not?: InputMaybe<Scalars['String']['input']>;
  summary_not_contains?: InputMaybe<Scalars['String']['input']>;
  summary_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  summary_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  summary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  summary_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_starts_with?: InputMaybe<Scalars['String']['input']>;
  summary_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  supply?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_changes_?: InputMaybe<PoolSupply_Filter>;
  supply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  supply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  total_fees_aum_kassandra?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_kassandra_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_kassandra_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_kassandra_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_kassandra_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_kassandra_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_kassandra_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_aum_manager_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_aum_manager_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_exit_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_exit_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_broker_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_broker_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_join_manager_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_join_manager_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_swap_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_swap_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_swap_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_fees_swap_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_fees_swap_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_?: InputMaybe<TotalValueLocked_Filter>;
  total_value_locked_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_value_locked_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_value_locked_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_volume_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_volume_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_volume_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  total_volume_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  total_volume_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  underlying_assets_?: InputMaybe<Asset_Filter>;
  underlying_assets_addresses?: InputMaybe<Array<Scalars['String']['input']>>;
  underlying_assets_addresses_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  underlying_assets_addresses_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  underlying_assets_addresses_not?: InputMaybe<Array<Scalars['String']['input']>>;
  underlying_assets_addresses_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  underlying_assets_addresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  unique_investors?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_broker?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_broker_gt?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_broker_gte?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_broker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unique_investors_broker_lt?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_broker_lte?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_broker_not?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_broker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unique_investors_gt?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_gte?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unique_investors_lt?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_lte?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_not?: InputMaybe<Scalars['Int']['input']>;
  unique_investors_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_gt?: InputMaybe<Scalars['String']['input']>;
  url_gte?: InputMaybe<Scalars['String']['input']>;
  url_in?: InputMaybe<Array<Scalars['String']['input']>>;
  url_lt?: InputMaybe<Scalars['String']['input']>;
  url_lte?: InputMaybe<Scalars['String']['input']>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_id?: InputMaybe<Scalars['String']['input']>;
  vault_id_contains?: InputMaybe<Scalars['String']['input']>;
  vault_id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_id_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_id_gt?: InputMaybe<Scalars['String']['input']>;
  vault_id_gte?: InputMaybe<Scalars['String']['input']>;
  vault_id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_id_lt?: InputMaybe<Scalars['String']['input']>;
  vault_id_lte?: InputMaybe<Scalars['String']['input']>;
  vault_id_not?: InputMaybe<Scalars['String']['input']>;
  vault_id_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_id_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  volumes_?: InputMaybe<Volume_Filter>;
  weight_goals_?: InputMaybe<WeightGoalPoint_Filter>;
  weights_?: InputMaybe<WeightPoint_Filter>;
  whitelist?: InputMaybe<Scalars['String']['input']>;
  whitelist_contains?: InputMaybe<Scalars['String']['input']>;
  whitelist_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_ends_with?: InputMaybe<Scalars['String']['input']>;
  whitelist_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_gt?: InputMaybe<Scalars['String']['input']>;
  whitelist_gte?: InputMaybe<Scalars['String']['input']>;
  whitelist_in?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelist_lt?: InputMaybe<Scalars['String']['input']>;
  whitelist_lte?: InputMaybe<Scalars['String']['input']>;
  whitelist_not?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_contains?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelist_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_starts_with?: InputMaybe<Scalars['String']['input']>;
  whitelist_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Pool_OrderBy =
  | '_investors'
  | 'activities'
  | 'address'
  | 'brokers'
  | 'chain'
  | 'chain_id'
  | 'controller'
  | 'decimals'
  | 'deposits_broker_btc'
  | 'deposits_broker_usd'
  | 'deposits_btc'
  | 'deposits_usd'
  | 'factory'
  | 'featured'
  | 'fee_aum'
  | 'fee_aum_kassandra'
  | 'fee_exit'
  | 'fee_join_broker'
  | 'fee_join_manager'
  | 'fee_swap'
  | 'fees'
  | 'founded_by'
  | 'history'
  | 'id'
  | 'investors'
  | 'is_private_pool'
  | 'last_harvest'
  | 'logo'
  | 'manager'
  | 'name'
  | 'num_activities'
  | 'num_brokers'
  | 'num_deposits'
  | 'num_deposits_broker'
  | 'num_exit'
  | 'num_join'
  | 'num_swap'
  | 'num_token_add'
  | 'num_token_remove'
  | 'num_tx'
  | 'num_weight_goals'
  | 'pool_id'
  | 'pool_version'
  | 'price_btc'
  | 'price_candles'
  | 'price_usd'
  | 'strategy'
  | 'summary'
  | 'supply'
  | 'supply_changes'
  | 'symbol'
  | 'total_fees_aum_kassandra'
  | 'total_fees_aum_kassandra_btc'
  | 'total_fees_aum_kassandra_usd'
  | 'total_fees_aum_manager'
  | 'total_fees_aum_manager_btc'
  | 'total_fees_aum_manager_usd'
  | 'total_fees_exit'
  | 'total_fees_exit_btc'
  | 'total_fees_exit_usd'
  | 'total_fees_join_broker'
  | 'total_fees_join_broker_btc'
  | 'total_fees_join_broker_usd'
  | 'total_fees_join_manager'
  | 'total_fees_join_manager_btc'
  | 'total_fees_join_manager_usd'
  | 'total_fees_swap_btc'
  | 'total_fees_swap_usd'
  | 'total_value_locked'
  | 'total_value_locked_btc'
  | 'total_value_locked_usd'
  | 'total_volume_btc'
  | 'total_volume_usd'
  | 'underlying_assets'
  | 'underlying_assets_addresses'
  | 'unique_investors'
  | 'unique_investors_broker'
  | 'url'
  | 'vault'
  | 'vault_id'
  | 'volumes'
  | 'weight_goals'
  | 'weights'
  | 'whitelist';

/**
 * A proposal made in the governance
 *
 */
export type Proposal = {
  __typename?: 'Proposal';
  againstVotes: Scalars['BigDecimal']['output'];
  calldatas: Array<Scalars['Bytes']['output']>;
  canceled?: Maybe<Scalars['BigInt']['output']>;
  created: Scalars['BigInt']['output'];
  description: Scalars['String']['output'];
  endBlock: Scalars['BigInt']['output'];
  eta?: Maybe<Scalars['BigInt']['output']>;
  executed?: Maybe<Scalars['BigInt']['output']>;
  forVotes: Scalars['BigDecimal']['output'];
  governance: Governance;
  /**
   * governance contract address + proposal number
   *
   */
  id: Scalars['ID']['output'];
  /**
   * proposal ID
   *
   */
  number: Scalars['Int']['output'];
  proposer: User;
  queued?: Maybe<Scalars['BigInt']['output']>;
  quorum: Scalars['BigDecimal']['output'];
  signatures: Array<Scalars['String']['output']>;
  startBlock: Scalars['BigInt']['output'];
  targets: Array<Scalars['String']['output']>;
  values: Array<Scalars['BigDecimal']['output']>;
  votes: Array<Vote>;
};


/**
 * A proposal made in the governance
 *
 */
export type ProposalVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Proposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  againstVotes?: InputMaybe<Scalars['BigDecimal']['input']>;
  againstVotes_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  againstVotes_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  againstVotes_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  againstVotes_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  againstVotes_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  againstVotes_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  againstVotes_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  canceled?: InputMaybe<Scalars['BigInt']['input']>;
  canceled_gt?: InputMaybe<Scalars['BigInt']['input']>;
  canceled_gte?: InputMaybe<Scalars['BigInt']['input']>;
  canceled_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceled_lt?: InputMaybe<Scalars['BigInt']['input']>;
  canceled_lte?: InputMaybe<Scalars['BigInt']['input']>;
  canceled_not?: InputMaybe<Scalars['BigInt']['input']>;
  canceled_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  created?: InputMaybe<Scalars['BigInt']['input']>;
  created_gt?: InputMaybe<Scalars['BigInt']['input']>;
  created_gte?: InputMaybe<Scalars['BigInt']['input']>;
  created_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  created_lt?: InputMaybe<Scalars['BigInt']['input']>;
  created_lte?: InputMaybe<Scalars['BigInt']['input']>;
  created_not?: InputMaybe<Scalars['BigInt']['input']>;
  created_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  endBlock?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eta?: InputMaybe<Scalars['BigInt']['input']>;
  eta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  eta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  eta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  eta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  eta_not?: InputMaybe<Scalars['BigInt']['input']>;
  eta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executed?: InputMaybe<Scalars['BigInt']['input']>;
  executed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executed_not?: InputMaybe<Scalars['BigInt']['input']>;
  executed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  forVotes?: InputMaybe<Scalars['BigDecimal']['input']>;
  forVotes_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  forVotes_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  forVotes_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  forVotes_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  forVotes_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  forVotes_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  forVotes_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  governance?: InputMaybe<Scalars['String']['input']>;
  governance_?: InputMaybe<Governance_Filter>;
  governance_contains?: InputMaybe<Scalars['String']['input']>;
  governance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  governance_ends_with?: InputMaybe<Scalars['String']['input']>;
  governance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governance_gt?: InputMaybe<Scalars['String']['input']>;
  governance_gte?: InputMaybe<Scalars['String']['input']>;
  governance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  governance_lt?: InputMaybe<Scalars['String']['input']>;
  governance_lte?: InputMaybe<Scalars['String']['input']>;
  governance_not?: InputMaybe<Scalars['String']['input']>;
  governance_not_contains?: InputMaybe<Scalars['String']['input']>;
  governance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  governance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  governance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  governance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  governance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  governance_starts_with?: InputMaybe<Scalars['String']['input']>;
  governance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gt?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
  number_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  number_lt?: InputMaybe<Scalars['Int']['input']>;
  number_lte?: InputMaybe<Scalars['Int']['input']>;
  number_not?: InputMaybe<Scalars['Int']['input']>;
  number_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  proposer?: InputMaybe<Scalars['String']['input']>;
  proposer_?: InputMaybe<User_Filter>;
  proposer_contains?: InputMaybe<Scalars['String']['input']>;
  proposer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_gt?: InputMaybe<Scalars['String']['input']>;
  proposer_gte?: InputMaybe<Scalars['String']['input']>;
  proposer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposer_lt?: InputMaybe<Scalars['String']['input']>;
  proposer_lte?: InputMaybe<Scalars['String']['input']>;
  proposer_not?: InputMaybe<Scalars['String']['input']>;
  proposer_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  queued?: InputMaybe<Scalars['BigInt']['input']>;
  queued_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queued_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queued_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queued_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queued_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queued_not?: InputMaybe<Scalars['BigInt']['input']>;
  queued_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorum?: InputMaybe<Scalars['BigDecimal']['input']>;
  quorum_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  quorum_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  quorum_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  quorum_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  quorum_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  quorum_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  quorum_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  startBlock?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targets?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_not?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  values?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  values_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  values_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  votes_?: InputMaybe<Vote_Filter>;
};

export type Proposal_OrderBy =
  | 'againstVotes'
  | 'calldatas'
  | 'canceled'
  | 'created'
  | 'description'
  | 'endBlock'
  | 'eta'
  | 'executed'
  | 'forVotes'
  | 'governance'
  | 'id'
  | 'number'
  | 'proposer'
  | 'queued'
  | 'quorum'
  | 'signatures'
  | 'startBlock'
  | 'targets'
  | 'values'
  | 'votes';

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  balance?: Maybe<Balance>;
  balances: Array<Balance>;
  broker?: Maybe<Broker>;
  brokers: Array<Broker>;
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
  chain?: Maybe<Chain>;
  chains: Array<Chain>;
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  fee?: Maybe<Fee>;
  fees: Array<Fee>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  histories: Array<History>;
  history?: Maybe<History>;
  investor?: Maybe<Investor>;
  investors: Array<Investor>;
  kassandra?: Maybe<Kassandra>;
  kassandras: Array<Kassandra>;
  manager?: Maybe<Manager>;
  managers: Array<Manager>;
  pool?: Maybe<Pool>;
  poolSupplies: Array<PoolSupply>;
  poolSupply?: Maybe<PoolSupply>;
  pools: Array<Pool>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  totalValueLocked?: Maybe<TotalValueLocked>;
  totalValueLockeds: Array<TotalValueLocked>;
  user?: Maybe<User>;
  users: Array<User>;
  volume?: Maybe<Volume>;
  volumes: Array<Volume>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
  weight?: Maybe<Weight>;
  weightGoal?: Maybe<WeightGoal>;
  weightGoalPoint?: Maybe<WeightGoalPoint>;
  weightGoalPoints: Array<WeightGoalPoint>;
  weightGoals: Array<WeightGoal>;
  weightPoint?: Maybe<WeightPoint>;
  weightPoints: Array<WeightPoint>;
  weights: Array<Weight>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryActivitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Activity_Filter>;
};


export type QueryActivityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Asset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Asset_Filter>;
};


export type QueryBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Balance_Filter>;
};


export type QueryBrokerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBrokersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Broker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Broker_Filter>;
};


export type QueryCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Candle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Candle_Filter>;
};


export type QueryChainArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChainsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Chain_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Chain_Filter>;
};


export type QueryDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegation_Filter>;
};


export type QueryFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fee_Filter>;
};


export type QueryGovernanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Governance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Governance_Filter>;
};


export type QueryHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<History_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<History_Filter>;
};


export type QueryHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInvestorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInvestorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Investor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Investor_Filter>;
};


export type QueryKassandraArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryKassandrasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Kassandra_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Kassandra_Filter>;
};


export type QueryManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Manager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Manager_Filter>;
};


export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolSupply_Filter>;
};


export type QueryPoolSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type QueryProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryTotalValueLockedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTotalValueLockedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TotalValueLocked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalValueLocked_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type QueryVolumeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVolumesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Volume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Volume_Filter>;
};


export type QueryVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};


export type QueryWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWeightGoalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWeightGoalPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWeightGoalPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightGoalPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WeightGoalPoint_Filter>;
};


export type QueryWeightGoalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightGoal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WeightGoal_Filter>;
};


export type QueryWeightPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWeightPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WeightPoint_Filter>;
};


export type QueryWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Weight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Weight_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  balance?: Maybe<Balance>;
  balances: Array<Balance>;
  broker?: Maybe<Broker>;
  brokers: Array<Broker>;
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
  chain?: Maybe<Chain>;
  chains: Array<Chain>;
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  fee?: Maybe<Fee>;
  fees: Array<Fee>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  histories: Array<History>;
  history?: Maybe<History>;
  investor?: Maybe<Investor>;
  investors: Array<Investor>;
  kassandra?: Maybe<Kassandra>;
  kassandras: Array<Kassandra>;
  manager?: Maybe<Manager>;
  managers: Array<Manager>;
  pool?: Maybe<Pool>;
  poolSupplies: Array<PoolSupply>;
  poolSupply?: Maybe<PoolSupply>;
  pools: Array<Pool>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  totalValueLocked?: Maybe<TotalValueLocked>;
  totalValueLockeds: Array<TotalValueLocked>;
  user?: Maybe<User>;
  users: Array<User>;
  volume?: Maybe<Volume>;
  volumes: Array<Volume>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
  weight?: Maybe<Weight>;
  weightGoal?: Maybe<WeightGoal>;
  weightGoalPoint?: Maybe<WeightGoalPoint>;
  weightGoalPoints: Array<WeightGoalPoint>;
  weightGoals: Array<WeightGoal>;
  weightPoint?: Maybe<WeightPoint>;
  weightPoints: Array<WeightPoint>;
  weights: Array<Weight>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionActivitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Activity_Filter>;
};


export type SubscriptionActivityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Asset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Asset_Filter>;
};


export type SubscriptionBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Balance_Filter>;
};


export type SubscriptionBrokerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBrokersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Broker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Broker_Filter>;
};


export type SubscriptionCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Candle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Candle_Filter>;
};


export type SubscriptionChainArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChainsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Chain_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Chain_Filter>;
};


export type SubscriptionDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegation_Filter>;
};


export type SubscriptionFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fee_Filter>;
};


export type SubscriptionGovernanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGovernancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Governance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Governance_Filter>;
};


export type SubscriptionHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<History_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<History_Filter>;
};


export type SubscriptionHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInvestorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInvestorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Investor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Investor_Filter>;
};


export type SubscriptionKassandraArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionKassandrasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Kassandra_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Kassandra_Filter>;
};


export type SubscriptionManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Manager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Manager_Filter>;
};


export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolSupply_Filter>;
};


export type SubscriptionPoolSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type SubscriptionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionTotalValueLockedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTotalValueLockedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TotalValueLocked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalValueLocked_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type SubscriptionVolumeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVolumesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Volume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Volume_Filter>;
};


export type SubscriptionVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};


export type SubscriptionWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWeightGoalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWeightGoalPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWeightGoalPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightGoalPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WeightGoalPoint_Filter>;
};


export type SubscriptionWeightGoalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightGoal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WeightGoal_Filter>;
};


export type SubscriptionWeightPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWeightPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WeightPoint_Filter>;
};


export type SubscriptionWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Weight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Weight_Filter>;
};

/**
 * Every token that is/was in a pool of the protocol
 *
 */
export type Token = {
  __typename?: 'Token';
  chain_ids: Array<Scalars['Int']['output']>;
  coingecko_id?: Maybe<Scalars['String']['output']>;
  decimals: Scalars['Int']['output'];
  /**
   * Token Address
   *
   */
  id: Scalars['ID']['output'];
  is_wrap_token: Scalars['Int']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pools: Array<Asset>;
  symbol: Scalars['String']['output'];
  wraps?: Maybe<Token>;
};


/**
 * Every token that is/was in a pool of the protocol
 *
 */
export type TokenPoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Asset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Asset_Filter>;
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  chain_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  chain_ids_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  chain_ids_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  chain_ids_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  chain_ids_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  chain_ids_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  coingecko_id?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_contains?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_ends_with?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_gt?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_gte?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  coingecko_id_lt?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_lte?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_not?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_not_contains?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  coingecko_id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_starts_with?: InputMaybe<Scalars['String']['input']>;
  coingecko_id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_wrap_token?: InputMaybe<Scalars['Int']['input']>;
  is_wrap_token_gt?: InputMaybe<Scalars['Int']['input']>;
  is_wrap_token_gte?: InputMaybe<Scalars['Int']['input']>;
  is_wrap_token_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_wrap_token_lt?: InputMaybe<Scalars['Int']['input']>;
  is_wrap_token_lte?: InputMaybe<Scalars['Int']['input']>;
  is_wrap_token_not?: InputMaybe<Scalars['Int']['input']>;
  is_wrap_token_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  logo?: InputMaybe<Scalars['String']['input']>;
  logo_contains?: InputMaybe<Scalars['String']['input']>;
  logo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_ends_with?: InputMaybe<Scalars['String']['input']>;
  logo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_gt?: InputMaybe<Scalars['String']['input']>;
  logo_gte?: InputMaybe<Scalars['String']['input']>;
  logo_in?: InputMaybe<Array<Scalars['String']['input']>>;
  logo_lt?: InputMaybe<Scalars['String']['input']>;
  logo_lte?: InputMaybe<Scalars['String']['input']>;
  logo_not?: InputMaybe<Scalars['String']['input']>;
  logo_not_contains?: InputMaybe<Scalars['String']['input']>;
  logo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  logo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  logo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  logo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logo_starts_with?: InputMaybe<Scalars['String']['input']>;
  logo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pools_?: InputMaybe<Asset_Filter>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wraps?: InputMaybe<Scalars['String']['input']>;
  wraps_?: InputMaybe<Token_Filter>;
  wraps_contains?: InputMaybe<Scalars['String']['input']>;
  wraps_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wraps_ends_with?: InputMaybe<Scalars['String']['input']>;
  wraps_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wraps_gt?: InputMaybe<Scalars['String']['input']>;
  wraps_gte?: InputMaybe<Scalars['String']['input']>;
  wraps_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wraps_lt?: InputMaybe<Scalars['String']['input']>;
  wraps_lte?: InputMaybe<Scalars['String']['input']>;
  wraps_not?: InputMaybe<Scalars['String']['input']>;
  wraps_not_contains?: InputMaybe<Scalars['String']['input']>;
  wraps_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wraps_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wraps_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wraps_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wraps_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wraps_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wraps_starts_with?: InputMaybe<Scalars['String']['input']>;
  wraps_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Token_OrderBy =
  | 'chain_ids'
  | 'coingecko_id'
  | 'decimals'
  | 'id'
  | 'is_wrap_token'
  | 'logo'
  | 'name'
  | 'pools'
  | 'symbol'
  | 'wraps';

/**
 * Total Value Locked OHLC hourly candle graph
 *
 */
export type TotalValueLocked = {
  __typename?: 'TotalValueLocked';
  /**
   * 'btc' or 'usd'
   *
   */
  base: Scalars['String']['output'];
  /**
   * Last value in that hour
   *
   */
  close: Scalars['BigDecimal']['output'];
  /**
   * Highest value in that hour
   *
   */
  high: Scalars['BigDecimal']['output'];
  /**
   * Base currency + Pool ID + Timestamp at starting hour
   *
   */
  id: Scalars['ID']['output'];
  /**
   * Lowest value in that hour
   *
   */
  low: Scalars['BigDecimal']['output'];
  manager?: Maybe<Manager>;
  /**
   * First value in that hour
   *
   */
  open: Scalars['BigDecimal']['output'];
  pool?: Maybe<Pool>;
  timestamp: Scalars['Int']['output'];
};

export type TotalValueLocked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  base?: InputMaybe<Scalars['String']['input']>;
  base_contains?: InputMaybe<Scalars['String']['input']>;
  base_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  base_ends_with?: InputMaybe<Scalars['String']['input']>;
  base_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  base_gt?: InputMaybe<Scalars['String']['input']>;
  base_gte?: InputMaybe<Scalars['String']['input']>;
  base_in?: InputMaybe<Array<Scalars['String']['input']>>;
  base_lt?: InputMaybe<Scalars['String']['input']>;
  base_lte?: InputMaybe<Scalars['String']['input']>;
  base_not?: InputMaybe<Scalars['String']['input']>;
  base_not_contains?: InputMaybe<Scalars['String']['input']>;
  base_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  base_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  base_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  base_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  base_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  base_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  base_starts_with?: InputMaybe<Scalars['String']['input']>;
  base_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  close?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  low?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<Manager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  open?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type TotalValueLocked_OrderBy =
  | 'base'
  | 'close'
  | 'high'
  | 'id'
  | 'low'
  | 'manager'
  | 'open'
  | 'pool'
  | 'timestamp';

/**
 * User with voting power in the governance
 *
 */
export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['String']['output']>;
  delegates: Array<Delegation>;
  description?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  /**
   * wallet address
   *
   */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  is_nft?: Maybe<Scalars['Boolean']['output']>;
  manager?: Maybe<Manager>;
  nft_chain?: Maybe<Scalars['String']['output']>;
  nft_collection_name?: Maybe<Scalars['String']['output']>;
  nft_contract_type?: Maybe<Scalars['String']['output']>;
  nft_description?: Maybe<Scalars['String']['output']>;
  nft_name?: Maybe<Scalars['String']['output']>;
  nft_symbol?: Maybe<Scalars['String']['output']>;
  nft_token_address?: Maybe<Scalars['String']['output']>;
  nft_token_num?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  proposals: Array<Proposal>;
  telegram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  unstakingPools: Array<Scalars['BigInt']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  votes: Array<Vote>;
  votingPower: Scalars['BigDecimal']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


/**
 * User with voting power in the governance
 *
 */
export type UserDelegatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Delegation_Filter>;
};


/**
 * User with voting power in the governance
 *
 */
export type UserProposalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Proposal_Filter>;
};


/**
 * User with voting power in the governance
 *
 */
export type UserVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_at_contains?: InputMaybe<Scalars['String']['input']>;
  created_at_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_ends_with?: InputMaybe<Scalars['String']['input']>;
  created_at_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_gt?: InputMaybe<Scalars['String']['input']>;
  created_at_gte?: InputMaybe<Scalars['String']['input']>;
  created_at_in?: InputMaybe<Array<Scalars['String']['input']>>;
  created_at_lt?: InputMaybe<Scalars['String']['input']>;
  created_at_lte?: InputMaybe<Scalars['String']['input']>;
  created_at_not?: InputMaybe<Scalars['String']['input']>;
  created_at_not_contains?: InputMaybe<Scalars['String']['input']>;
  created_at_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  created_at_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  created_at_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  created_at_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  created_at_starts_with?: InputMaybe<Scalars['String']['input']>;
  created_at_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegates_?: InputMaybe<Delegation_Filter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  discord?: InputMaybe<Scalars['String']['input']>;
  discord_contains?: InputMaybe<Scalars['String']['input']>;
  discord_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_ends_with?: InputMaybe<Scalars['String']['input']>;
  discord_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_gt?: InputMaybe<Scalars['String']['input']>;
  discord_gte?: InputMaybe<Scalars['String']['input']>;
  discord_in?: InputMaybe<Array<Scalars['String']['input']>>;
  discord_lt?: InputMaybe<Scalars['String']['input']>;
  discord_lte?: InputMaybe<Scalars['String']['input']>;
  discord_not?: InputMaybe<Scalars['String']['input']>;
  discord_not_contains?: InputMaybe<Scalars['String']['input']>;
  discord_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  discord_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  discord_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  discord_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_starts_with?: InputMaybe<Scalars['String']['input']>;
  discord_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  is_nft?: InputMaybe<Scalars['Boolean']['input']>;
  is_nft_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is_nft_not?: InputMaybe<Scalars['Boolean']['input']>;
  is_nft_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<Manager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain?: InputMaybe<Scalars['String']['input']>;
  nft_chain_contains?: InputMaybe<Scalars['String']['input']>;
  nft_chain_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_chain_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_gt?: InputMaybe<Scalars['String']['input']>;
  nft_chain_gte?: InputMaybe<Scalars['String']['input']>;
  nft_chain_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_chain_lt?: InputMaybe<Scalars['String']['input']>;
  nft_chain_lte?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_chain_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_chain_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_chain_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_chain_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_contains?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_gt?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_gte?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_collection_name_lt?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_lte?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_collection_name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_collection_name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_gt?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_gte?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_contract_type_lt?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_lte?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_contract_type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_contract_type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description?: InputMaybe<Scalars['String']['input']>;
  nft_description_contains?: InputMaybe<Scalars['String']['input']>;
  nft_description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_gt?: InputMaybe<Scalars['String']['input']>;
  nft_description_gte?: InputMaybe<Scalars['String']['input']>;
  nft_description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_description_lt?: InputMaybe<Scalars['String']['input']>;
  nft_description_lte?: InputMaybe<Scalars['String']['input']>;
  nft_description_not?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_description_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name?: InputMaybe<Scalars['String']['input']>;
  nft_name_contains?: InputMaybe<Scalars['String']['input']>;
  nft_name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_gt?: InputMaybe<Scalars['String']['input']>;
  nft_name_gte?: InputMaybe<Scalars['String']['input']>;
  nft_name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_name_lt?: InputMaybe<Scalars['String']['input']>;
  nft_name_lte?: InputMaybe<Scalars['String']['input']>;
  nft_name_not?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_name_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_contains?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_gt?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_gte?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_symbol_lt?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_lte?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_contains?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_gt?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_gte?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_token_address_lt?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_lte?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_token_address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_contains?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_gt?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_gte?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_token_num_lt?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_lte?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_token_num_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_token_num_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  nickname_contains?: InputMaybe<Scalars['String']['input']>;
  nickname_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_ends_with?: InputMaybe<Scalars['String']['input']>;
  nickname_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_gt?: InputMaybe<Scalars['String']['input']>;
  nickname_gte?: InputMaybe<Scalars['String']['input']>;
  nickname_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nickname_lt?: InputMaybe<Scalars['String']['input']>;
  nickname_lte?: InputMaybe<Scalars['String']['input']>;
  nickname_not?: InputMaybe<Scalars['String']['input']>;
  nickname_not_contains?: InputMaybe<Scalars['String']['input']>;
  nickname_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nickname_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nickname_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nickname_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nickname_starts_with?: InputMaybe<Scalars['String']['input']>;
  nickname_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposals_?: InputMaybe<Proposal_Filter>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  telegram_contains?: InputMaybe<Scalars['String']['input']>;
  telegram_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_ends_with?: InputMaybe<Scalars['String']['input']>;
  telegram_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_gt?: InputMaybe<Scalars['String']['input']>;
  telegram_gte?: InputMaybe<Scalars['String']['input']>;
  telegram_in?: InputMaybe<Array<Scalars['String']['input']>>;
  telegram_lt?: InputMaybe<Scalars['String']['input']>;
  telegram_lte?: InputMaybe<Scalars['String']['input']>;
  telegram_not?: InputMaybe<Scalars['String']['input']>;
  telegram_not_contains?: InputMaybe<Scalars['String']['input']>;
  telegram_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  telegram_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  telegram_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  telegram_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  telegram_starts_with?: InputMaybe<Scalars['String']['input']>;
  telegram_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  twitter_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  twitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_gt?: InputMaybe<Scalars['String']['input']>;
  twitter_gte?: InputMaybe<Scalars['String']['input']>;
  twitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  twitter_lt?: InputMaybe<Scalars['String']['input']>;
  twitter_lte?: InputMaybe<Scalars['String']['input']>;
  twitter_not?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  twitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  twitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  twitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  twitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unstakingPools?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakingPools_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakingPools_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakingPools_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakingPools_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakingPools_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_at_contains?: InputMaybe<Scalars['String']['input']>;
  updated_at_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_ends_with?: InputMaybe<Scalars['String']['input']>;
  updated_at_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_gt?: InputMaybe<Scalars['String']['input']>;
  updated_at_gte?: InputMaybe<Scalars['String']['input']>;
  updated_at_in?: InputMaybe<Array<Scalars['String']['input']>>;
  updated_at_lt?: InputMaybe<Scalars['String']['input']>;
  updated_at_lte?: InputMaybe<Scalars['String']['input']>;
  updated_at_not?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_contains?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  updated_at_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  updated_at_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updated_at_starts_with?: InputMaybe<Scalars['String']['input']>;
  updated_at_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votes_?: InputMaybe<Vote_Filter>;
  votingPower?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  votingPower_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  website_ends_with?: InputMaybe<Scalars['String']['input']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_gt?: InputMaybe<Scalars['String']['input']>;
  website_gte?: InputMaybe<Scalars['String']['input']>;
  website_in?: InputMaybe<Array<Scalars['String']['input']>>;
  website_lt?: InputMaybe<Scalars['String']['input']>;
  website_lte?: InputMaybe<Scalars['String']['input']>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  website_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_starts_with?: InputMaybe<Scalars['String']['input']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type User_OrderBy =
  | 'created_at'
  | 'delegates'
  | 'description'
  | 'discord'
  | 'id'
  | 'image'
  | 'is_nft'
  | 'manager'
  | 'nft_chain'
  | 'nft_collection_name'
  | 'nft_contract_type'
  | 'nft_description'
  | 'nft_name'
  | 'nft_symbol'
  | 'nft_token_address'
  | 'nft_token_num'
  | 'nickname'
  | 'proposals'
  | 'telegram'
  | 'twitter'
  | 'unstakingPools'
  | 'updated_at'
  | 'votes'
  | 'votingPower'
  | 'website';

/**
 * Transaction volume per type of operation for 1h, 1d and 7d periods (1d periods are not 24h volume as they are based from 00:00 UTC)
 *
 */
export type Volume = {
  __typename?: 'Volume';
  /**
   * Pool ID + Operation type + Period + Swap pair + Timestamp at period start
   *
   */
  id: Scalars['ID']['output'];
  kassandra?: Maybe<Kassandra>;
  manager?: Maybe<Manager>;
  num_tx: Scalars['Int']['output'];
  /**
   * Period in seconds, available in 1h, 24h, 7d
   *
   */
  period: Scalars['Int']['output'];
  pool: Pool;
  /**
   * 'tokensIn-tokenOut' for swaps (BTC-ETH != ETH-BTC);
   * 'tokenIn' for joins
   * 'tokenOut' for exits
   * 'pool.symbol' for transfers
   * 'broker' for deposits with a broker
   * 'manager' for deposits without a broker
   *
   */
  swap_pair: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  /**
   * One of 'join', 'exit', 'transfer' or 'swap'
   *
   */
  type: Scalars['String']['output'];
  volume_btc: Scalars['BigDecimal']['output'];
  volume_usd: Scalars['BigDecimal']['output'];
};

export type Volume_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  kassandra?: InputMaybe<Scalars['String']['input']>;
  kassandra_?: InputMaybe<Kassandra_Filter>;
  kassandra_contains?: InputMaybe<Scalars['String']['input']>;
  kassandra_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_ends_with?: InputMaybe<Scalars['String']['input']>;
  kassandra_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_gt?: InputMaybe<Scalars['String']['input']>;
  kassandra_gte?: InputMaybe<Scalars['String']['input']>;
  kassandra_in?: InputMaybe<Array<Scalars['String']['input']>>;
  kassandra_lt?: InputMaybe<Scalars['String']['input']>;
  kassandra_lte?: InputMaybe<Scalars['String']['input']>;
  kassandra_not?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_contains?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  kassandra_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  kassandra_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  kassandra_starts_with?: InputMaybe<Scalars['String']['input']>;
  kassandra_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<Manager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  num_tx?: InputMaybe<Scalars['Int']['input']>;
  num_tx_gt?: InputMaybe<Scalars['Int']['input']>;
  num_tx_gte?: InputMaybe<Scalars['Int']['input']>;
  num_tx_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  num_tx_lt?: InputMaybe<Scalars['Int']['input']>;
  num_tx_lte?: InputMaybe<Scalars['Int']['input']>;
  num_tx_not?: InputMaybe<Scalars['Int']['input']>;
  num_tx_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  period?: InputMaybe<Scalars['Int']['input']>;
  period_gt?: InputMaybe<Scalars['Int']['input']>;
  period_gte?: InputMaybe<Scalars['Int']['input']>;
  period_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  period_lt?: InputMaybe<Scalars['Int']['input']>;
  period_lte?: InputMaybe<Scalars['Int']['input']>;
  period_not?: InputMaybe<Scalars['Int']['input']>;
  period_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  swap_pair?: InputMaybe<Scalars['String']['input']>;
  swap_pair_contains?: InputMaybe<Scalars['String']['input']>;
  swap_pair_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  swap_pair_ends_with?: InputMaybe<Scalars['String']['input']>;
  swap_pair_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  swap_pair_gt?: InputMaybe<Scalars['String']['input']>;
  swap_pair_gte?: InputMaybe<Scalars['String']['input']>;
  swap_pair_in?: InputMaybe<Array<Scalars['String']['input']>>;
  swap_pair_lt?: InputMaybe<Scalars['String']['input']>;
  swap_pair_lte?: InputMaybe<Scalars['String']['input']>;
  swap_pair_not?: InputMaybe<Scalars['String']['input']>;
  swap_pair_not_contains?: InputMaybe<Scalars['String']['input']>;
  swap_pair_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  swap_pair_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  swap_pair_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  swap_pair_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  swap_pair_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  swap_pair_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  swap_pair_starts_with?: InputMaybe<Scalars['String']['input']>;
  swap_pair_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  volume_btc?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_btc_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_btc_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_usd?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_usd_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_usd_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type Volume_OrderBy =
  | 'id'
  | 'kassandra'
  | 'manager'
  | 'num_tx'
  | 'period'
  | 'pool'
  | 'swap_pair'
  | 'timestamp'
  | 'type'
  | 'volume_btc'
  | 'volume_usd';

/**
 * Vote of a single wallet for a single proposal
 *
 */
export type Vote = {
  __typename?: 'Vote';
  /**
   * proposal ID (governance ID + proposal number) + voting wallet address
   *
   */
  id: Scalars['ID']['output'];
  proposal: Proposal;
  support: Scalars['Boolean']['output'];
  voter: User;
  votingPower: Scalars['BigDecimal']['output'];
};

export type Vote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  proposal?: InputMaybe<Scalars['String']['input']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_gt?: InputMaybe<Scalars['String']['input']>;
  proposal_gte?: InputMaybe<Scalars['String']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_lt?: InputMaybe<Scalars['String']['input']>;
  proposal_lte?: InputMaybe<Scalars['String']['input']>;
  proposal_not?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  support?: InputMaybe<Scalars['Boolean']['input']>;
  support_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  support_not?: InputMaybe<Scalars['Boolean']['input']>;
  support_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  voter?: InputMaybe<Scalars['String']['input']>;
  voter_?: InputMaybe<User_Filter>;
  voter_contains?: InputMaybe<Scalars['String']['input']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_gt?: InputMaybe<Scalars['String']['input']>;
  voter_gte?: InputMaybe<Scalars['String']['input']>;
  voter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_lt?: InputMaybe<Scalars['String']['input']>;
  voter_lte?: InputMaybe<Scalars['String']['input']>;
  voter_not?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votingPower?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  votingPower_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  votingPower_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type Vote_OrderBy =
  | 'id'
  | 'proposal'
  | 'support'
  | 'voter'
  | 'votingPower';

/**
 * DEPRECATED - Weight of a single token at a WeightPoint
 *
 */
export type Weight = {
  __typename?: 'Weight';
  /**
   * Weight Point ID + Token Address
   *
   */
  id: Scalars['ID']['output'];
  point: WeightPoint;
  token: Token;
  weight: Scalars['BigInt']['output'];
  weight_normalized: Scalars['BigDecimal']['output'];
};

/**
 * Weight of a single token the pool is moving to at a WeightGoalPoint
 *
 */
export type WeightGoal = {
  __typename?: 'WeightGoal';
  asset: Asset;
  /**
   * WeightGoalPoint ID + Token index in the pool
   *
   */
  id: Scalars['ID']['output'];
  point: WeightGoalPoint;
  weight: Scalars['BigInt']['output'];
  weight_normalized: Scalars['BigDecimal']['output'];
};

/**
 * Weights the pool is moving to
 *
 */
export type WeightGoalPoint = {
  __typename?: 'WeightGoalPoint';
  end_timestamp: Scalars['Int']['output'];
  /**
   * Pool ID + End timestamp
   *
   */
  id: Scalars['ID']['output'];
  pool: Pool;
  previous?: Maybe<WeightGoalPoint>;
  start_timestamp: Scalars['Int']['output'];
  token?: Maybe<Token>;
  txHash: Scalars['String']['output'];
  /**
   * One of: 'add', 'remove', 'rebalance'
   *
   */
  type: Scalars['String']['output'];
  weights: Array<WeightGoal>;
};


/**
 * Weights the pool is moving to
 *
 */
export type WeightGoalPointWeightsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightGoal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WeightGoal_Filter>;
};

export type WeightGoalPoint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  end_timestamp?: InputMaybe<Scalars['Int']['input']>;
  end_timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  end_timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  end_timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  end_timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  end_timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  end_timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  end_timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previous?: InputMaybe<Scalars['String']['input']>;
  previous_?: InputMaybe<WeightGoalPoint_Filter>;
  previous_contains?: InputMaybe<Scalars['String']['input']>;
  previous_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previous_ends_with?: InputMaybe<Scalars['String']['input']>;
  previous_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previous_gt?: InputMaybe<Scalars['String']['input']>;
  previous_gte?: InputMaybe<Scalars['String']['input']>;
  previous_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previous_lt?: InputMaybe<Scalars['String']['input']>;
  previous_lte?: InputMaybe<Scalars['String']['input']>;
  previous_not?: InputMaybe<Scalars['String']['input']>;
  previous_not_contains?: InputMaybe<Scalars['String']['input']>;
  previous_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previous_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  previous_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previous_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previous_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  previous_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previous_starts_with?: InputMaybe<Scalars['String']['input']>;
  previous_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  start_timestamp?: InputMaybe<Scalars['Int']['input']>;
  start_timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  start_timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  start_timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  start_timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  start_timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  start_timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  start_timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  weights_?: InputMaybe<WeightGoal_Filter>;
};

export type WeightGoalPoint_OrderBy =
  | 'end_timestamp'
  | 'id'
  | 'pool'
  | 'previous'
  | 'start_timestamp'
  | 'token'
  | 'txHash'
  | 'type'
  | 'weights';

export type WeightGoal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_Filter>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  point?: InputMaybe<Scalars['String']['input']>;
  point_?: InputMaybe<WeightGoalPoint_Filter>;
  point_contains?: InputMaybe<Scalars['String']['input']>;
  point_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  point_ends_with?: InputMaybe<Scalars['String']['input']>;
  point_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  point_gt?: InputMaybe<Scalars['String']['input']>;
  point_gte?: InputMaybe<Scalars['String']['input']>;
  point_in?: InputMaybe<Array<Scalars['String']['input']>>;
  point_lt?: InputMaybe<Scalars['String']['input']>;
  point_lte?: InputMaybe<Scalars['String']['input']>;
  point_not?: InputMaybe<Scalars['String']['input']>;
  point_not_contains?: InputMaybe<Scalars['String']['input']>;
  point_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  point_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  point_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  point_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  point_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  point_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  point_starts_with?: InputMaybe<Scalars['String']['input']>;
  point_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_normalized?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_normalized_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_not?: InputMaybe<Scalars['BigInt']['input']>;
  weight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type WeightGoal_OrderBy =
  | 'asset'
  | 'id'
  | 'point'
  | 'weight'
  | 'weight_normalized';

/**
 * DEPRECATED - Weights per hour at close time
 *
 */
export type WeightPoint = {
  __typename?: 'WeightPoint';
  /**
   * Pool ID + Timestamp at start of the hour
   *
   */
  id: Scalars['ID']['output'];
  pool: Pool;
  timestamp: Scalars['Int']['output'];
  weights: Array<Weight>;
};


/**
 * DEPRECATED - Weights per hour at close time
 *
 */
export type WeightPointWeightsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Weight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Weight_Filter>;
};

export type WeightPoint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  weights_?: InputMaybe<Weight_Filter>;
};

export type WeightPoint_OrderBy =
  | 'id'
  | 'pool'
  | 'timestamp'
  | 'weights';

export type Weight_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  point?: InputMaybe<Scalars['String']['input']>;
  point_?: InputMaybe<WeightPoint_Filter>;
  point_contains?: InputMaybe<Scalars['String']['input']>;
  point_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  point_ends_with?: InputMaybe<Scalars['String']['input']>;
  point_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  point_gt?: InputMaybe<Scalars['String']['input']>;
  point_gte?: InputMaybe<Scalars['String']['input']>;
  point_in?: InputMaybe<Array<Scalars['String']['input']>>;
  point_lt?: InputMaybe<Scalars['String']['input']>;
  point_lte?: InputMaybe<Scalars['String']['input']>;
  point_not?: InputMaybe<Scalars['String']['input']>;
  point_not_contains?: InputMaybe<Scalars['String']['input']>;
  point_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  point_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  point_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  point_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  point_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  point_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  point_starts_with?: InputMaybe<Scalars['String']['input']>;
  point_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_normalized?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_normalized_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_normalized_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_not?: InputMaybe<Scalars['BigInt']['input']>;
  weight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Weight_OrderBy =
  | 'id'
  | 'point'
  | 'token'
  | 'weight'
  | 'weight_normalized';

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type DaoInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type DaoInfoQuery = { __typename?: 'Query', kassandras: Array<{ __typename?: 'Kassandra', total_value_locked_usd: string, total_volume_usd: string, total_fees_swap_usd: string, total_fees_exit_usd: string }> };

export type PoolInfoQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  day: Scalars['Int']['input'];
}>;


export type PoolInfoQuery = { __typename?: 'Query', pool?: { __typename?: 'Pool', id: string, name: string, decimals: number, symbol: string, price_usd: string, logo?: string | null, founded_by?: string | null, underlying_assets: Array<{ __typename?: 'Asset', balance: string, weight_normalized: string, weight_goal_normalized: string, token: { __typename?: 'Token', id: string, logo?: string | null, name: string, decimals: number, symbol: string, wraps?: { __typename?: 'Token', logo?: string | null } | null } }>, now: Array<{ __typename?: 'Candle', timestamp: number, close: string }>, day: Array<{ __typename?: 'Candle', timestamp: number, close: string }>, weight_goals: Array<{ __typename?: 'WeightGoalPoint', start_timestamp: number, end_timestamp: number, weights: Array<{ __typename?: 'WeightGoal', weight_normalized: string, asset: { __typename?: 'Asset', token: { __typename?: 'Token', id: string } } }> }> } | null };

export type WithdrawFeeQueryVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type WithdrawFeeQuery = { __typename?: 'Query', pools: Array<{ __typename?: 'Pool', withdraw: Array<{ __typename?: 'Fee', volume_usd: string }> }> };


export const DaoInfoDocument = gql`
    query DaoInfo {
  kassandras {
    total_value_locked_usd
    total_volume_usd
    total_fees_swap_usd
    total_fees_exit_usd
  }
}
    `;
export const PoolInfoDocument = gql`
    query PoolInfo($id: ID!, $day: Int!) {
  pool(id: $id) {
    id
    name
    decimals
    symbol
    price_usd
    logo
    founded_by
    underlying_assets(orderBy: weight_normalized, orderDirection: desc) {
      balance
      weight_normalized
      weight_goal_normalized
      token {
        id
        logo
        name
        decimals
        symbol
        wraps {
          logo
        }
      }
    }
    now: price_candles(
      where: {base: "usd", period: 3600}
      orderBy: timestamp
      orderDirection: desc
      first: 1
    ) {
      timestamp
      close
    }
    day: price_candles(
      where: {base: "usd", period: 3600, timestamp_gt: $day}
      orderBy: timestamp
      first: 1
    ) {
      timestamp
      close
    }
    weight_goals(orderBy: end_timestamp, orderDirection: desc, first: 2) {
      start_timestamp
      end_timestamp
      weights(orderBy: weight_normalized, orderDirection: desc) {
        asset {
          token {
            id
          }
        }
        weight_normalized
      }
    }
  }
}
    `;
export const WithdrawFeeDocument = gql`
    query WithdrawFee($ids: [ID!]!) {
  pools(where: {id_in: $ids}) {
    withdraw: fees(where: {period: 604800, type: "exit"}, first: 1000) {
      volume_usd
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    DaoInfo(variables?: DaoInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DaoInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DaoInfoQuery>(DaoInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DaoInfo', 'query');
    },
    PoolInfo(variables: PoolInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PoolInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PoolInfoQuery>(PoolInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PoolInfo', 'query');
    },
    WithdrawFee(variables: WithdrawFeeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WithdrawFeeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WithdrawFeeQuery>(WithdrawFeeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'WithdrawFee', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;