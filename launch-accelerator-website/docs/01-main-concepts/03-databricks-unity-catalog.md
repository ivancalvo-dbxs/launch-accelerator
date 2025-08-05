---
sidebar_position: 3
---

# Unity Catalog

Unity Catalog is the the unified governance solution for data and AI assets on Databricks. See more on: 

- [Databricks Unity Catalog](https://www.databricks.com/product/unity-catalog)
- [What is Unity Catalog?](https://docs.databricks.com/aws/en/data-governance/unity-catalog/)

## Unified Governance

![Unity Catalog Access](/img/unity-catalog/uc-top-level.png)

## Where is UC positioned?

Unity Catalog is the governance and access layer between your data lake and your compute (jobs, pipelines, warehouses, model serving endpoints, applications).

![Unity Catalog Layer](/img/unity-catalog/uc-layer.png)

![Unity Catalog and Federation](/img/unity-catalog/uc-and-federation.png)

## How to ingest data on "Databricks" or Unity Catalog?

It is important to understand that Databricks storage and compute is decoupled. That is why on the previous section it is mentioned that a Workspace (compute objects) **should not govern and store the data and AI assets**.

When a Unity Catalog table is created using SQL, Spark or Declarative pipelines, the files and metadata is stored on **your** Cloud Object Storage (S3, ADLS, GS).

:::tip Take Away

The data, metadata and AI models are always stored on your cloud-object storage.

:::

:::tip Take Away

Databricks does not stores your data.

:::


## Unity Catalog three-level namespace convention

![Unity Catalog Hierarchy](/img/unity-catalog/uc-hierarchy.png)

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