import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../../environments/environment';

const uri = environment.graphQLUrl;

export const createApollo = (
  httpLink: HttpLink
): { link: ApolloLink; cache: InMemoryCache } => {
  const basic = setContext(() => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));

  const link = ApolloLink.from([basic, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache,
  };
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphqlModule {}
