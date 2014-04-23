# gaffa-link

link behaviour for linking data in a [gaffa](https://github.com/gaffa-tape/gaffa-js) application

This behaviour can be used to transform data from one location in the model, to another.

## Install:

    npm i gaffa-link

## Add to gaffa:

    gaffa.registerConstructor(require('gaffa-link'));

# API

## Properties (instanceof Gaffa.Property)

### source (set)

Where to get data from.

### target (set)

Where to put data.

### cleans (set)

Whether to mark the target as clean after a set.