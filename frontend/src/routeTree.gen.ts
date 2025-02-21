/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AuthImport } from './routes/_auth'

// Create Virtual Routes

const MapLazyImport = createFileRoute('/map')()
const IndexLazyImport = createFileRoute('/')()
const MapListLazyImport = createFileRoute('/map/list')()
const MapClearCuttingsClearCuttingIdLazyImport = createFileRoute(
  '/map/clear-cuttings/$clearCuttingId',
)()

// Create/Update Routes

const MapLazyRoute = MapLazyImport.update({
  id: '/map',
  path: '/map',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/map.lazy').then((d) => d.Route))

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const MapListLazyRoute = MapListLazyImport.update({
  id: '/list',
  path: '/list',
  getParentRoute: () => MapLazyRoute,
} as any).lazy(() => import('./routes/map/list.lazy').then((d) => d.Route))

const MapClearCuttingsClearCuttingIdLazyRoute =
  MapClearCuttingsClearCuttingIdLazyImport.update({
    id: '/clear-cuttings/$clearCuttingId',
    path: '/clear-cuttings/$clearCuttingId',
    getParentRoute: () => MapLazyRoute,
  } as any).lazy(() =>
    import('./routes/map/clear-cuttings.$clearCuttingId.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/map': {
      id: '/map'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof MapLazyImport
      parentRoute: typeof rootRoute
    }
    '/map/list': {
      id: '/map/list'
      path: '/list'
      fullPath: '/map/list'
      preLoaderRoute: typeof MapListLazyImport
      parentRoute: typeof MapLazyImport
    }
    '/map/clear-cuttings/$clearCuttingId': {
      id: '/map/clear-cuttings/$clearCuttingId'
      path: '/clear-cuttings/$clearCuttingId'
      fullPath: '/map/clear-cuttings/$clearCuttingId'
      preLoaderRoute: typeof MapClearCuttingsClearCuttingIdLazyImport
      parentRoute: typeof MapLazyImport
    }
  }
}

// Create and export the route tree

interface MapLazyRouteChildren {
  MapListLazyRoute: typeof MapListLazyRoute
  MapClearCuttingsClearCuttingIdLazyRoute: typeof MapClearCuttingsClearCuttingIdLazyRoute
}

const MapLazyRouteChildren: MapLazyRouteChildren = {
  MapListLazyRoute: MapListLazyRoute,
  MapClearCuttingsClearCuttingIdLazyRoute:
    MapClearCuttingsClearCuttingIdLazyRoute,
}

const MapLazyRouteWithChildren =
  MapLazyRoute._addFileChildren(MapLazyRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '': typeof AuthRoute
  '/login': typeof LoginRoute
  '/map': typeof MapLazyRouteWithChildren
  '/map/list': typeof MapListLazyRoute
  '/map/clear-cuttings/$clearCuttingId': typeof MapClearCuttingsClearCuttingIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '': typeof AuthRoute
  '/login': typeof LoginRoute
  '/map': typeof MapLazyRouteWithChildren
  '/map/list': typeof MapListLazyRoute
  '/map/clear-cuttings/$clearCuttingId': typeof MapClearCuttingsClearCuttingIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_auth': typeof AuthRoute
  '/login': typeof LoginRoute
  '/map': typeof MapLazyRouteWithChildren
  '/map/list': typeof MapListLazyRoute
  '/map/clear-cuttings/$clearCuttingId': typeof MapClearCuttingsClearCuttingIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/map'
    | '/map/list'
    | '/map/clear-cuttings/$clearCuttingId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/map'
    | '/map/list'
    | '/map/clear-cuttings/$clearCuttingId'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/login'
    | '/map'
    | '/map/list'
    | '/map/clear-cuttings/$clearCuttingId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AuthRoute: typeof AuthRoute
  LoginRoute: typeof LoginRoute
  MapLazyRoute: typeof MapLazyRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AuthRoute: AuthRoute,
  LoginRoute: LoginRoute,
  MapLazyRoute: MapLazyRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/login",
        "/map"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/map": {
      "filePath": "map.lazy.tsx",
      "children": [
        "/map/list",
        "/map/clear-cuttings/$clearCuttingId"
      ]
    },
    "/map/list": {
      "filePath": "map/list.lazy.tsx",
      "parent": "/map"
    },
    "/map/clear-cuttings/$clearCuttingId": {
      "filePath": "map/clear-cuttings.$clearCuttingId.lazy.tsx",
      "parent": "/map"
    }
  }
}
ROUTE_MANIFEST_END */
