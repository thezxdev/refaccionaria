### **RUTAS**:

**Privadas**:

* HomePage
* ProductsPage
* ProductPage
* SuppliersPage
* SupplierPage
* SalePage
* SalesPage
  
**Públicas**:

* Login



#### **ProductInfo**:

```typescript
id: string;
barCode: string;
description: string;
images?: string[];
name: string;
price: number;
stock: number;
supplier: string;
createdAt: new Date();
updatedAt: new Date();
```

#### **SupplierInfo**:

```typescript
id: string;
email: string;
image?: string;
name: string;
telephone: string;
company: string;
createdAt: new Date();
```

#### **UserInfo**:

```typescript
id: string;
email: string;
image?: string;
name: string;
telephone: string;
createdAt: new Date();
```

#### **SalesInfo**:

```typescript
id: string;
userName: string; // Guardar el nombre del usuario o el ID del usuario (probablemente lo deje con el nombre del usuario)
userID: string;
products: product[];
total: number;
recibido: number;
devuelto: number;
createdAt: new Date();
```

```typescript
https://developer.microsoft.com/en-us/fluentui#/controls/web/nav
https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/shared
https://developer.microsoft.com/en-us/fluentui#/styles/web/elevation
https://developer.microsoft.com/en-us/fluentui#/styles/web/icons
https://developer.microsoft.com/en-us/fluentui#/styles/web/typography
https://developer.microsoft.com/en-us/fluentui#/styles/web/motion
https://developer.microsoft.com/en-us/fluentui#/styles/web/layout
https://developer.microsoft.com/en-us/fluentui#/styles/web/localization
https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/charting/dist/index.html#/examples/verticalbarchart
```