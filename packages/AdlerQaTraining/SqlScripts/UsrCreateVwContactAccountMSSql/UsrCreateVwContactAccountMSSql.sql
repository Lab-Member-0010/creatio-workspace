IF OBJECT_ID('dbo.UsrVwContactAccount', 'V') IS NOT NULL
    DROP VIEW dbo.UsrVwContactAccount;

EXEC('
CREATE VIEW dbo.UsrVwContactAccount
AS
SELECT
    c.Id AS Id,
    c.CreatedOn AS CreatedOn,
    c.CreatedById AS CreatedById,
    c.ModifiedOn AS ModifiedOn,
    c.ModifiedById AS ModifiedById,
    CAST(0 AS INT) AS ProcessListeners,
    CAST(c.Name AS NVARCHAR(250)) AS UsrContactName,
    CAST(c.Email AS NVARCHAR(250)) AS UsrEmail,
    c.AccountId AS UsrAccountId,
    CAST(a.Name AS NVARCHAR(250)) AS UsrAccountDisplayName
FROM dbo.Contact AS c
LEFT OUTER JOIN dbo.Account AS a ON a.Id = c.AccountId;
');