import { GraphQLResolveInfo } from 'graphql';
import { FindEmployeeResult as FindEmployeeResultModel } from '../features/hr/findEmployee/findEmployee';
import { Employee as EmployeeModel } from '../domain/entities/Employee';
import { Context } from '../graphql/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Employee = {
  __typename?: 'Employee';
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
};

export type FindEmployeeResult = FindEmployeeSuccess | NotFound;

export type FindEmployeeSuccess = {
  __typename?: 'FindEmployeeSuccess';
  employee?: Maybe<Employee>;
};

export type NotFound = {
  __typename?: 'NotFound';
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findEmployee: FindEmployeeResult;
};


export type QueryFindEmployeeArgs = {
  id: Scalars['ID']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Employee: ResolverTypeWrapper<EmployeeModel>;
  FindEmployeeResult: ResolverTypeWrapper<FindEmployeeResultModel>;
  FindEmployeeSuccess: ResolverTypeWrapper<Omit<FindEmployeeSuccess, 'employee'> & { employee?: Maybe<ResolversTypes['Employee']> }>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  NotFound: ResolverTypeWrapper<NotFound>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Employee: EmployeeModel;
  FindEmployeeResult: FindEmployeeResultModel;
  FindEmployeeSuccess: Omit<FindEmployeeSuccess, 'employee'> & { employee?: Maybe<ResolversParentTypes['Employee']> };
  ID: Scalars['ID']['output'];
  NotFound: NotFound;
  Query: {};
  String: Scalars['String']['output'];
};

export type EmployeeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = {
  dateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FindEmployeeResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FindEmployeeResult'] = ResolversParentTypes['FindEmployeeResult']> = {
  __resolveType: TypeResolveFn<'FindEmployeeSuccess' | 'NotFound', ParentType, ContextType>;
};

export type FindEmployeeSuccessResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FindEmployeeSuccess'] = ResolversParentTypes['FindEmployeeSuccess']> = {
  employee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotFound'] = ResolversParentTypes['NotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findEmployee?: Resolver<ResolversTypes['FindEmployeeResult'], ParentType, ContextType, RequireFields<QueryFindEmployeeArgs, 'id'>>;
};

export type Resolvers<ContextType = Context> = {
  Employee?: EmployeeResolvers<ContextType>;
  FindEmployeeResult?: FindEmployeeResultResolvers<ContextType>;
  FindEmployeeSuccess?: FindEmployeeSuccessResolvers<ContextType>;
  NotFound?: NotFoundResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

