# HappiK Exercise

## Prerequisite

Install nodejs 16.17.0 (hint: you should use `nvm` for that).

Install `direnv` then in your terminal, on the the root folder type : `direnv allow .`.

## Install dependencies

```shell
yarn
```

## Run backend env

```shell
yarn backend
yarn hasura migrate apply && hasura metadata apply
```

## Appy migrations and metadata

(hint: you should only do that after first install or after pulling changes from other dev)

```shell
yarn hasura migrate apply && yarn hasura metadata apply
```

## Run hasura console

The hasura console allows you to modify DB schema and metadata.

```shell
yarn hasura console
```

(you could keep it running in a terminal window)

## Generate apollo hooks from graphql

```shell
yarn generate
```

## Run nextjs

```shell
yarn dev
```

<!-- apres c'est prerequis terminer voila ce qui suit: -->

## Ajout de apollo client

-   On cree un dossier **lib** dans **src** puis a l'interieur de **lib** on cree un fichier **apollo_client.tsx**
-   Ensuite on englobe notre page **\_App.tsx** du provider apollo qui founit le client a toute notre app via une props "client".

## Creation de la db sur hasura console (dbName: Happik_Exo, tableName: users )

-   Dans l'onglet **DATA** on cree un database ensuite les tables qu'on a besoins.
-   Dans l'onglet **API** tout en bas de page nous pouvons tester nos requete graphql.

## Insert des donnees dans nos tables

-   soit on cree directement les donnees dans notre table via hasura console dans l'onglet **DATA**
-   sinon on peut cree des seeders via le dossier **seeds** qui se trouve a la racine du projet dans **hasura/seeds**

## creation de seeds user

-   **hasura seed create myUserSeed --from-table users** [comment]: **myUserSeed** qui est le nom du fichier qu'on va donner. | **user** qui est le nom de la table cree plutot et qui va etre la source ou le fichier seed va prendre les donnees.
-   Ensuite on selectionne notre db (ici Happik_Exo dans notre cas) que le shell nous propose.
-   Une fois notre fichier seed creer on insert nos donner dans ce meme fichier (1662638560201_myUserSeed.sql).
-   Ensuite pour mettre a jour notre db avec notre fichier seeds creer il faut cette commande suivantes : **hasura seed apply**

## utilisation des hooks generer par graphql codegen

-   On utliser le hook useQuery de apollo en l'important premierement : **import { useQuery } from '@apollo/client';**
-   Ensuite on importe notre hook **GetUsersDocument** generer grace a graphql codegen qui lui meme utilise le fichier users.graphql pour generer ce hooks : **import { GetUsersDocument } from 'src/graphql-generated/apollo-hooks'**
-   On passe ensuite **GetUsersDocument** dans le hooks useQuery : **const { loading, error, data } = useQuery(GetUsersDocument);**
-   Pour verifier nos data quel sont bien recuperer on peut faire : **console.log(data.users)**

## Queries Graphql

-   **users.graphql** qui contient les requetes en rapport au users
-   **transactions.graphql** qui contient les requetes en rapport au transactions et contient une foreigns key **user_id** pour lier l'auteur de la transactions a la transactions creer.

## Generer automatiquement un fichier de migration qui recupere les les tables existante de la db

-   **hasura migrate create "init" --from-server** [comment]: cela va creer un fichier up.sql avec les requete sql qui creera pour nous nos table avec la prochaine commande suivante.
-   **yarn hasura migrate apply && yarn hasura metadata apply** [comment]: cela va faire migrer nos fichier sql dans le dossier **hasura/Happik_Exo/** dans notre db.

# Derniere maj il se peut que il y a un probleme avec le fichier de migration et le fichier seed

-   dans ce cas:
-   cree une db Happik_Exo
    -ensuite 1 table transactions et 1 table users
    -champs de la table transactions:(id, name, account_number, amount, et une relation avec l'id de la table users )
    -champs de la table users:(id, first_name, last_name, email, created_at )
    -ensuite insert 1 ou deux donnee dans chaque table.

et puis teste en front pour effectuer les operations de crud.
