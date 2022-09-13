import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: bigint;
  timestamptz: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface BigintComparisonExp {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
}

/** mutation root */
export interface MutationRoot {
  __typename?: 'mutation_root';
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<TransactionsMutationResponse>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<TransactionsMutationResponse>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<TransactionsMutationResponse>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>;
  /** update multiples rows of table: "transactions" */
  update_transactions_many?: Maybe<Array<Maybe<TransactionsMutationResponse>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<UsersMutationResponse>>>;
}


/** mutation root */
export type MutationRootDeleteTransactionsArgs = {
  where: TransactionsBoolExp;
};


/** mutation root */
export type MutationRootDeleteTransactionsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootInsertTransactionsArgs = {
  objects: Array<TransactionsInsertInput>;
  on_conflict?: InputMaybe<TransactionsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTransactionsOneArgs = {
  object: TransactionsInsertInput;
  on_conflict?: InputMaybe<TransactionsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateTransactionsArgs = {
  _inc?: InputMaybe<TransactionsIncInput>;
  _set?: InputMaybe<TransactionsSetInput>;
  where: TransactionsBoolExp;
};


/** mutation root */
export type MutationRootUpdateTransactionsByPkArgs = {
  _inc?: InputMaybe<TransactionsIncInput>;
  _set?: InputMaybe<TransactionsSetInput>;
  pk_columns: TransactionsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTransactionsManyArgs = {
  updates: Array<TransactionsUpdates>;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export interface QueryRoot {
  __typename?: 'query_root';
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: TransactionsAggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


export type QueryRootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<TransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionsOrderBy>>;
  where?: InputMaybe<TransactionsBoolExp>;
};


export type QueryRootTransactionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionsOrderBy>>;
  where?: InputMaybe<TransactionsBoolExp>;
};


export type QueryRootTransactionsByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersByPkArgs = {
  id: Scalars['Int'];
};

export interface SubscriptionRoot {
  __typename?: 'subscription_root';
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: TransactionsAggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


export type SubscriptionRootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<TransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionsOrderBy>>;
  where?: InputMaybe<TransactionsBoolExp>;
};


export type SubscriptionRootTransactionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionsOrderBy>>;
  where?: InputMaybe<TransactionsBoolExp>;
};


export type SubscriptionRootTransactionsByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
}

/** columns and relationships of "transactions" */
export interface Transactions {
  __typename?: 'transactions';
  account_number: Scalars['bigint'];
  amount: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
}

/** aggregated selection of "transactions" */
export interface TransactionsAggregate {
  __typename?: 'transactions_aggregate';
  aggregate?: Maybe<TransactionsAggregateFields>;
  nodes: Array<Transactions>;
}

/** aggregate fields of "transactions" */
export interface TransactionsAggregateFields {
  __typename?: 'transactions_aggregate_fields';
  avg?: Maybe<TransactionsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<TransactionsMaxFields>;
  min?: Maybe<TransactionsMinFields>;
  stddev?: Maybe<TransactionsStddevFields>;
  stddev_pop?: Maybe<TransactionsStddevPopFields>;
  stddev_samp?: Maybe<TransactionsStddevSampFields>;
  sum?: Maybe<TransactionsSumFields>;
  var_pop?: Maybe<TransactionsVarPopFields>;
  var_samp?: Maybe<TransactionsVarSampFields>;
  variance?: Maybe<TransactionsVarianceFields>;
}


/** aggregate fields of "transactions" */
export type TransactionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TransactionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transactions" */
export interface TransactionsAggregateOrderBy {
  avg?: InputMaybe<TransactionsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TransactionsMaxOrderBy>;
  min?: InputMaybe<TransactionsMinOrderBy>;
  stddev?: InputMaybe<TransactionsStddevOrderBy>;
  stddev_pop?: InputMaybe<TransactionsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<TransactionsStddevSampOrderBy>;
  sum?: InputMaybe<TransactionsSumOrderBy>;
  var_pop?: InputMaybe<TransactionsVarPopOrderBy>;
  var_samp?: InputMaybe<TransactionsVarSampOrderBy>;
  variance?: InputMaybe<TransactionsVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "transactions" */
export interface TransactionsArrRelInsertInput {
  data: Array<TransactionsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<TransactionsOnConflict>;
}

/** aggregate avg on columns */
export interface TransactionsAvgFields {
  __typename?: 'transactions_avg_fields';
  account_number?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "transactions" */
export interface TransactionsAvgOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export interface TransactionsBoolExp {
  _and?: InputMaybe<Array<TransactionsBoolExp>>;
  _not?: InputMaybe<TransactionsBoolExp>;
  _or?: InputMaybe<Array<TransactionsBoolExp>>;
  account_number?: InputMaybe<BigintComparisonExp>;
  amount?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<IntComparisonExp>;
}

/** unique or primary key constraints on table "transactions" */
export enum TransactionsConstraint {
  /** unique or primary key constraint on columns "id" */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing numeric columns in table "transactions" */
export interface TransactionsIncInput {
  account_number?: InputMaybe<Scalars['bigint']>;
  amount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "transactions" */
export interface TransactionsInsertInput {
  account_number?: InputMaybe<Scalars['bigint']>;
  amount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate max on columns */
export interface TransactionsMaxFields {
  __typename?: 'transactions_max_fields';
  account_number?: Maybe<Scalars['bigint']>;
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
}

/** order by max() on columns of table "transactions" */
export interface TransactionsMaxOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
export interface TransactionsMinFields {
  __typename?: 'transactions_min_fields';
  account_number?: Maybe<Scalars['bigint']>;
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
}

/** order by min() on columns of table "transactions" */
export interface TransactionsMinOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "transactions" */
export interface TransactionsMutationResponse {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
}

/** on_conflict condition type for table "transactions" */
export interface TransactionsOnConflict {
  constraint: TransactionsConstraint;
  update_columns?: Array<TransactionsUpdateColumn>;
  where?: InputMaybe<TransactionsBoolExp>;
}

/** Ordering options when selecting data from "transactions". */
export interface TransactionsOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: transactions */
export interface TransactionsPkColumnsInput {
  id: Scalars['Int'];
}

/** select columns of table "transactions" */
export enum TransactionsSelectColumn {
  /** column name */
  AccountNumber = 'account_number',
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "transactions" */
export interface TransactionsSetInput {
  account_number?: InputMaybe<Scalars['bigint']>;
  amount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
}

/** aggregate stddev on columns */
export interface TransactionsStddevFields {
  __typename?: 'transactions_stddev_fields';
  account_number?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "transactions" */
export interface TransactionsStddevOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
export interface TransactionsStddevPopFields {
  __typename?: 'transactions_stddev_pop_fields';
  account_number?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "transactions" */
export interface TransactionsStddevPopOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
export interface TransactionsStddevSampFields {
  __typename?: 'transactions_stddev_samp_fields';
  account_number?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "transactions" */
export interface TransactionsStddevSampOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate sum on columns */
export interface TransactionsSumFields {
  __typename?: 'transactions_sum_fields';
  account_number?: Maybe<Scalars['bigint']>;
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "transactions" */
export interface TransactionsSumOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** update columns of table "transactions" */
export enum TransactionsUpdateColumn {
  /** column name */
  AccountNumber = 'account_number',
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

export interface TransactionsUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TransactionsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TransactionsSetInput>;
  where: TransactionsBoolExp;
}

/** aggregate var_pop on columns */
export interface TransactionsVarPopFields {
  __typename?: 'transactions_var_pop_fields';
  account_number?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "transactions" */
export interface TransactionsVarPopOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
export interface TransactionsVarSampFields {
  __typename?: 'transactions_var_samp_fields';
  account_number?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "transactions" */
export interface TransactionsVarSampOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
export interface TransactionsVarianceFields {
  __typename?: 'transactions_variance_fields';
  account_number?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "transactions" */
export interface TransactionsVarianceOrderBy {
  account_number?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** columns and relationships of "users" */
export interface Users {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: TransactionsAggregate;
}


/** columns and relationships of "users" */
export type UsersTransactionsArgs = {
  distinct_on?: InputMaybe<Array<TransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionsOrderBy>>;
  where?: InputMaybe<TransactionsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersTransactionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionsOrderBy>>;
  where?: InputMaybe<TransactionsBoolExp>;
};

/** aggregated selection of "users" */
export interface UsersAggregate {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
}

/** aggregate fields of "users" */
export interface UsersAggregateFields {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<UsersAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
  stddev?: Maybe<UsersStddevFields>;
  stddev_pop?: Maybe<UsersStddevPopFields>;
  stddev_samp?: Maybe<UsersStddevSampFields>;
  sum?: Maybe<UsersSumFields>;
  var_pop?: Maybe<UsersVarPopFields>;
  var_samp?: Maybe<UsersVarSampFields>;
  variance?: Maybe<UsersVarianceFields>;
}


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export interface UsersAvgFields {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface UsersBoolExp {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  first_name?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  last_name?: InputMaybe<StringComparisonExp>;
  transactions?: InputMaybe<TransactionsBoolExp>;
}

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export interface UsersIncInput {
  id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "users" */
export interface UsersInsertInput {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  transactions?: InputMaybe<TransactionsArrRelInsertInput>;
}

/** aggregate max on columns */
export interface UsersMaxFields {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface UsersMinFields {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "users" */
export interface UsersMutationResponse {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
}

/** input type for inserting object relation for remote table "users" */
export interface UsersObjRelInsertInput {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
}

/** on_conflict condition type for table "users" */
export interface UsersOnConflict {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
}

/** Ordering options when selecting data from "users". */
export interface UsersOrderBy {
  created_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  first_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  last_name?: InputMaybe<OrderBy>;
  transactions_aggregate?: InputMaybe<TransactionsAggregateOrderBy>;
}

/** primary key columns input for table: users */
export interface UsersPkColumnsInput {
  id: Scalars['Int'];
}

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "users" */
export interface UsersSetInput {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface UsersStddevFields {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface UsersStddevPopFields {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface UsersStddevSampFields {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface UsersSumFields {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
}

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

export interface UsersUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
}

/** aggregate var_pop on columns */
export interface UsersVarPopFields {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface UsersVarSampFields {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface UsersVarianceFields {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
}

export type GetTransactionsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetTransactionsQuery = { __typename?: 'query_root', transactions: Array<{ __typename?: 'transactions', id: number, name: string, account_number: bigint, amount: number, user: { __typename?: 'users', id: number, first_name: string, last_name: string, email: string } }> };

export type GetTransactionsByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTransactionsByIdQuery = { __typename?: 'query_root', transactions: Array<{ __typename?: 'transactions', account_number: bigint, amount: number, name: string, id: number, user: { __typename?: 'users', id: number, first_name: string, last_name: string, email: string } }> };

export type DeleteTransactionsMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTransactionsMutation = { __typename?: 'mutation_root', delete_transactions?: { __typename?: 'transactions_mutation_response', affected_rows: number } | null };

export type UpdateTransactionsMutationVariables = Exact<{
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  account_number?: InputMaybe<Scalars['bigint']>;
  amount?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateTransactionsMutation = { __typename?: 'mutation_root', update_transactions?: { __typename?: 'transactions_mutation_response', returning: Array<{ __typename?: 'transactions', id: number, name: string, account_number: bigint, amount: number, user_id: number }> } | null };

export type AddTransactionMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  account_number?: InputMaybe<Scalars['bigint']>;
  amount?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
}>;


export type AddTransactionMutation = { __typename?: 'mutation_root', insert_transactions?: { __typename?: 'transactions_mutation_response', returning: Array<{ __typename?: 'transactions', name: string, account_number: bigint, amount: number, user_id: number }> } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, first_name: string, last_name: string, email: string, created_at: string }> };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', delete_users?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', first_name: string, last_name: string, email: string }> } | null };

export type AddUserMutationVariables = Exact<{
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type AddUserMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', first_name: string, last_name: string, email: string, created_at: string }> } | null };


export const GetTransactionsDocument = gql`
  query getTransactions($offset: Int, $limit: Int) {
    transactions(offset: $offset, limit: $limit) {
      id
      name
      account_number
      amount
      user {
        id
        first_name
        last_name
        email
      }
    }
  }
`;

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, options);
      }
export function useGetTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, options);
        }
export type GetTransactionsQueryHookResult = ReturnType<typeof useGetTransactionsQuery>;
export type GetTransactionsLazyQueryHookResult = ReturnType<typeof useGetTransactionsLazyQuery>;
export type GetTransactionsQueryResult = Apollo.QueryResult<GetTransactionsQuery, GetTransactionsQueryVariables>;
export const GetTransactionsByIdDocument = gql`
  query getTransactionsById($id: Int!) {
    transactions(where: {id: {_eq: $id}}) {
      account_number
      amount
      name
      id
      user {
        id
        first_name
        last_name
        email
      }
    }
  }
`;

/**
 * __useGetTransactionsByIdQuery__
 *
 * To run a query within a React component, call `useGetTransactionsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTransactionsByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionsByIdQuery, GetTransactionsByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionsByIdQuery, GetTransactionsByIdQueryVariables>(GetTransactionsByIdDocument, options);
      }
export function useGetTransactionsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionsByIdQuery, GetTransactionsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionsByIdQuery, GetTransactionsByIdQueryVariables>(GetTransactionsByIdDocument, options);
        }
export type GetTransactionsByIdQueryHookResult = ReturnType<typeof useGetTransactionsByIdQuery>;
export type GetTransactionsByIdLazyQueryHookResult = ReturnType<typeof useGetTransactionsByIdLazyQuery>;
export type GetTransactionsByIdQueryResult = Apollo.QueryResult<GetTransactionsByIdQuery, GetTransactionsByIdQueryVariables>;
export const DeleteTransactionsDocument = gql`
  mutation deleteTransactions($id: Int!) {
    delete_transactions(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;

/**
 * __useDeleteTransactionsMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionsMutation, { data, loading, error }] = useDeleteTransactionsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTransactionsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTransactionsMutation, DeleteTransactionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTransactionsMutation, DeleteTransactionsMutationVariables>(DeleteTransactionsDocument, options);
      }
export type DeleteTransactionsMutationHookResult = ReturnType<typeof useDeleteTransactionsMutation>;
export type DeleteTransactionsMutationResult = Apollo.MutationResult<DeleteTransactionsMutation>;
export type DeleteTransactionsMutationOptions = Apollo.BaseMutationOptions<DeleteTransactionsMutation, DeleteTransactionsMutationVariables>;
export const UpdateTransactionsDocument = gql`
  mutation updateTransactions($id: Int!, $name: String, $account_number: bigint, $amount: Int) {
    update_transactions(
      where: {id: {_eq: $id}}
      _set: {name: $name, account_number: $account_number, amount: $amount}
    ) {
      returning {
        id
        name
        account_number
        amount
        user_id
      }
    }
  }
`;

/**
 * __useUpdateTransactionsMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionsMutation, { data, loading, error }] = useUpdateTransactionsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      account_number: // value for 'account_number'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useUpdateTransactionsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionsMutation, UpdateTransactionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransactionsMutation, UpdateTransactionsMutationVariables>(UpdateTransactionsDocument, options);
      }
export type UpdateTransactionsMutationHookResult = ReturnType<typeof useUpdateTransactionsMutation>;
export type UpdateTransactionsMutationResult = Apollo.MutationResult<UpdateTransactionsMutation>;
export type UpdateTransactionsMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionsMutation, UpdateTransactionsMutationVariables>;
export const AddTransactionDocument = gql`
  mutation addTransaction($name: String, $account_number: bigint, $amount: Int, $user_id: Int) {
    insert_transactions(
      objects: {name: $name, account_number: $account_number, amount: $amount, user_id: $user_id}
    ) {
      returning {
        name
        account_number
        amount
        user_id
      }
    }
  }
`;

/**
 * __useAddTransactionMutation__
 *
 * To run a mutation, you first call `useAddTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTransactionMutation, { data, loading, error }] = useAddTransactionMutation({
 *   variables: {
 *      name: // value for 'name'
 *      account_number: // value for 'account_number'
 *      amount: // value for 'amount'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAddTransactionMutation(baseOptions?: Apollo.MutationHookOptions<AddTransactionMutation, AddTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTransactionMutation, AddTransactionMutationVariables>(AddTransactionDocument, options);
      }
export type AddTransactionMutationHookResult = ReturnType<typeof useAddTransactionMutation>;
export type AddTransactionMutationResult = Apollo.MutationResult<AddTransactionMutation>;
export type AddTransactionMutationOptions = Apollo.BaseMutationOptions<AddTransactionMutation, AddTransactionMutationVariables>;
export const GetUsersDocument = gql`
  query getUsers {
    users {
      id
      first_name
      last_name
      email
      created_at
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const DeleteUserDocument = gql`
  mutation deleteUser($id: Int!) {
    delete_users(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = gql`
  mutation updateUser($id: Int!, $first_name: String, $last_name: String, $email: String) {
    update_users(
      where: {id: {_eq: $id}}
      _set: {first_name: $first_name, last_name: $last_name, email: $email}
    ) {
      returning {
        first_name
        last_name
        email
      }
    }
  }
`;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const AddUserDocument = gql`
  mutation addUser($first_name: String, $last_name: String, $email: String) {
    insert_users(
      objects: {first_name: $first_name, last_name: $last_name, email: $email}
    ) {
      returning {
        first_name
        last_name
        email
        created_at
      }
    }
  }
`;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;