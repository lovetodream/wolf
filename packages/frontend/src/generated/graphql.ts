import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};











export type App = {
  __typename?: 'App';
  _id: Scalars['String'];
  type: AppType;
  project: Project;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum AppType {
  Web = 'WEB',
  Ios = 'IOS',
  Android = 'ANDROID',
  Other = 'OTHER'
}


export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
};


export type MutationCreateProjectArgs = {
  name: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['String'];
  name: Scalars['String'];
  app: Array<App>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  project: Project;
  projects: Array<Project>;
  app: App;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};


export type QueryAppArgs = {
  id: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  projectCreated: Project;
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProjectQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectQuery = (
  { __typename?: 'Query' }
  & { projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, '_id' | 'name'>
    & { app: Array<(
      { __typename?: 'App' }
      & Pick<App, 'type'>
    )> }
  )> }
);

export type CreateProjectMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateProjectMutation = (
  { __typename?: 'Mutation' }
  & { createProject: (
    { __typename?: 'Project' }
    & Pick<Project, 'name'>
    & { app: Array<(
      { __typename?: 'App' }
      & Pick<App, 'type'>
    )> }
  ) }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  App: ResolverTypeWrapper<App>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AppType: AppType;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Mutation: ResolverTypeWrapper<{}>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  App: App;
  String: Scalars['String'];
  DateTime: Scalars['DateTime'];
  Mutation: {};
  Project: Project;
  Query: {};
  Subscription: {};
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: Scalars['Boolean'];
};

export type NgModuleDirectiveArgs = {   module: Scalars['String']; };

export type NgModuleDirectiveResolver<Result, Parent, ContextType = any, Args = NgModuleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type NamedClientDirectiveArgs = {   name: Scalars['String']; };

export type NamedClientDirectiveResolver<Result, Parent, ContextType = any, Args = NamedClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UnionDirectiveArgs = {   discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {   discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {   embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {  };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {  };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {   path: Scalars['String']; };

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AppResolvers<ContextType = any, ParentType extends ResolversParentTypes['App'] = ResolversParentTypes['App']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AppType'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationCreateProjectArgs, 'name'>>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  app?: Resolver<Array<ResolversTypes['App']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  app?: Resolver<ResolversTypes['App'], ParentType, ContextType, RequireFields<QueryAppArgs, 'id'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  projectCreated?: SubscriptionResolver<ResolversTypes['Project'], "projectCreated", ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  App?: AppResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  NgModule?: NgModuleDirectiveResolver<any, any, ContextType>;
  namedClient?: NamedClientDirectiveResolver<any, any, ContextType>;
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
export const ProjectDocument = gql`
    query Project {
  projects {
    _id
    name
    app {
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProjectGQL extends Apollo.Query<ProjectQuery, ProjectQueryVariables> {
    document = ProjectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateProjectDocument = gql`
    mutation CreateProject($name: String!) {
  createProject(name: $name) {
    name
    app {
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateProjectGQL extends Apollo.Mutation<CreateProjectMutation, CreateProjectMutationVariables> {
    document = CreateProjectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
import { ObjectID } from 'mongodb';