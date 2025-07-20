---
sidebar_position: 2
---

# Pre-requisites

## Multi-tenancy
Before creating the first Databricks workspace, catalogs and it respectively cloud resources, it is important to understand that Databricks supports cloud multi-tenant deployments with the goal of having physical and logical isolation of users, groups, data, networking and virtual compute.

The following image shows a good initial setup on Databricks where you have three different workspaces aligned with the *Software Development Lifecycle (SDLC)* best practices:

![Multi tenancy](/img/workspace/workspace-organization.png)

## Best practice

| Cloud Provider | Tenant       |
| -------------- | -------      |    
| AWS            | Account      |
| Azure          | Subscription |
| GCP            | Project      |

:::tip
⭐ **If possible, use different cloud tenants to manage the SDLC of your cloud objects and resources (best practice).**
:::

:::note
* If not, a single tenant can be used to manage the different SDLC stages and cloud resources.

* If it's a single tenant, is there a plan to add more tenants in the short-mid term? If so, just deploy the **dev** databricks and cloud resources at first, don't create staging, qa and prod for now.
:::

## Check-list

By the end of this aricle you need to have identified the following:

- [X] Multiple or single cloud tenant setup