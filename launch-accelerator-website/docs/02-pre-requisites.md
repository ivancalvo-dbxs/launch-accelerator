---
sidebar_position: 2
---

# Pre-requisites

The goal of this section is to identify your current and/or potential cloud single or multiple tenancy.

## Cloud Tenants

| Cloud Provider | Tenant       |
| -------------- | -------      |    
| AWS            | Account      |
| Azure          | Subscription |
| GCP            | Project      |

## Multi-tenancy
Before creating the:

    - Workspaces
    - UC Metastore.
    - UC objects such as catalogs.

And the respective cloud resources, it is **important to understand that Databricks supports cloud multi-tenant deployments** with the goal of having physical and logical isolation of users, groups, data, networking and virtual compute.

The following image shows a good initial setup on Databricks where three different with it respecworkspaces aligned with the *Software Development Lifecycle (SDLC)* best practices:

## Workspace Multi-tenancy
![Multi tenancy](/img/workspace/workspace-organization.png)

## Unity Catalog Multi-tenancy
![Multi tenancy](/img/unity-catalog/uc-top-isolation.png)

## Best practice

:::tip Different tenants: Recommendation and best practice
⭐ **If possible, use different cloud tenants to manage the SDLC of your cloud objects and resources (best practice).**
:::

:::note Single Tenant
* A single tenant can be used to manage the different SDLC stages and cloud resources.
    * Ask your team if there a plan to add more tenants in the short-mid term? If so, just deploy the **dev** databricks and cloud resources at first, don't create staging, qa and prod for now.
:::

## Identify your current scenario

| Scenario | # of tenants   | Plan to add more? | # Conclusion | 
| -------- | -------        | ------------------- | -------      |
| A        | 1 tenant       | yes                 | Create the dev workspace+catalog on the existing tenant. When available, repeat for staging and prod tenants.|
| B        | 1 tenant       | no                 | Create dev, staging and prod workspaces and catalogs on the same tenant.|
| C        | 2 or more tenants    | -                 | 	Create the dev workspace+catalog on the dev tenant. Repeat for staging and prod tenants.|

## Check-list

- [X] Identify your current tenant scenario.