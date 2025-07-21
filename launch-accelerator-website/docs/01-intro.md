---
sidebar_position: 1
---

# Main Concepts

## Databricks Architecture

The following diagram represents the different stages and tools involved in a Databricks end-to-end solution: 

![Well Architected Lakehouse](/img/architecture/well-architected-lakehouse-2025-07-10.png)

All the Databricks assets represented on the diagram such as:

- Jobs & Orchestration
- Pipelines
- Clusters and Warehouses
- Dashboards
- Experiments and ML models

Needs to be created and configured on a **Databricks Workspace**.

## Databricks Workspace

A Databricks Workspace is the unified working environment for collaboration and isolation for users, groups and service principals (automation).

![Workspace Organization](/img/workspace/workspace-organization.png)

It is important to mention that the Databricks Workspace should not store and govern the organization data and models. This is where we position **Unity Catalog**.


## Unity Catalog

Unity Catalog is the the unified governance solution for data and AI assets on Databricks.

![Unity Catalog Access](/img/unity-catalog/uc-top-level.png)

![Unity Catalog Layer](/img/unity-catalog/uc-layer.png)

![Unity Catalog and Federation](/img/unity-catalog/uc-and-federation.png)

![Unity Catalog Hierarchy](/img/unity-catalog/uc-hierarchy.png)


## Databricks Account Console

The Databricks Workspace(s) and the Unity Catalog Metastore(s) can be created on the Databricks Account Console, here is the relation between the Account Console, Workspaces and UC Metastores:

### Top-level object relation
![Account Console Catalog Relation](/img/account/account-object-relation.png)

### Deep-level object relation
![Account Console Deep Relation](/img/account/account-deep-relation.png)

<!---
## Next steps

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

-->