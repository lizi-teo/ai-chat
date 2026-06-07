# Bank Logos

SVG files sourced from [Simple Icons](https://simpleicons.org) (open-source, community-maintained).  
PNG files sourced via Google's favicon service from official bank websites.

All logos are trademarks of their respective owners. Use is nominative — identifying the bank
in a legitimate financial UI context.

## Structure

```
public/bank-logos/
  global/       # Major international banks
  australia/    # Australian banks
  singapore/    # Singapore banks
  japan/        # Japanese banks
  new-zealand/  # New Zealand banks
```

## Global (21 logos)

| File | Bank | Format |
|------|------|--------|
| `global/chase.svg` | Chase | SVG |
| `global/bankofamerica.svg` | Bank of America | SVG |
| `global/wellsfargo.svg` | Wells Fargo | SVG |
| `global/hsbc.svg` | HSBC | SVG |
| `global/barclays.svg` | Barclays | SVG |
| `global/goldmansachs.svg` | Goldman Sachs | SVG |
| `global/deutschebank.svg` | Deutsche Bank | SVG |
| `global/commerzbank.svg` | Commerzbank | SVG |
| `global/caixabank.svg` | CaixaBank | SVG |
| `global/monzo.svg` | Monzo | SVG |
| `global/revolut.svg` | Revolut | SVG |
| `global/starlingbank.svg` | Starling Bank | SVG |
| `global/wise.svg` | Wise | SVG |
| `global/nubank.svg` | Nubank | SVG |
| `global/citibank.png` | Citibank | PNG |
| `global/santander.png` | Santander | PNG |
| `global/ing.png` | ING | PNG |
| `global/capitalone.png` | Capital One | PNG |
| `global/lloydsbank.png` | Lloyds Bank | PNG |
| `global/natwest.png` | NatWest | PNG |
| `global/standardchartered.png` | Standard Chartered | PNG |
| `global/jpmorgan.png` | JPMorgan | PNG |
| `global/ubs.png` | UBS | PNG |
| `global/rbs.png` | RBS | PNG |
| `global/bmo.png` | BMO | PNG |
| `global/td.png` | TD Bank | PNG |
| `global/bnpparibas.png` | BNP Paribas | PNG |

**Not available automatically** (download from official press kits):
- Scotiabank — [scotiabank.com/global/en/about/media-centre.html](https://www.scotiabank.com/global/en/about/media-centre.html)
- Société Générale — [societegenerale.com/en/press](https://www.societegenerale.com/en/press)

## Australia (15 logos)

| File | Bank |
|------|------|
| `australia/commbank.png` | Commonwealth Bank |
| `australia/anz.png` | ANZ |
| `australia/westpac.png` | Westpac |
| `australia/nab.png` | NAB |
| `australia/macquarie.png` | Macquarie |
| `australia/suncorp.png` | Suncorp |
| `australia/bendigobank.png` | Bendigo Bank |
| `australia/bankwest.png` | Bankwest |
| `australia/ing.png` | ING Australia |
| `australia/mebank.png` | ME Bank |
| `australia/rabobank.png` | Rabobank |
| `australia/banksa.png` | Bank SA |
| `australia/stgeorge.png` | St George Bank |
| `australia/boq.png` | Bank of Queensland |
| `australia/up.png` | Up Bank |

## Singapore (6 logos)

| File | Bank |
|------|------|
| `singapore/dbs.png` | DBS |
| `singapore/ocbc.png` | OCBC |
| `singapore/maybank.png` | Maybank |
| `singapore/standardchartered.png` | Standard Chartered |
| `singapore/citibank.png` | Citibank |
| `singapore/posb.png` | POSB |

**Not available automatically:**
- UOB — [uobgroup.com/investor-relations/index.html](https://www.uobgroup.com/investor-relations/index.html)

## Japan (6 logos)

| File | Bank |
|------|------|
| `japan/rakuten.svg` | Rakuten Bank | SVG |
| `japan/mizuho.png` | Mizuho |
| `japan/mufg.png` | MUFG |
| `japan/smbc.png` | SMBC |
| `japan/japanpost.png` | Japan Post Bank |
| `japan/sbibank.png` | SBI Shinsei Bank |

## New Zealand (7 logos)

| File | Bank |
|------|------|
| `new-zealand/anz.png` | ANZ NZ |
| `new-zealand/bnz.png` | BNZ |
| `new-zealand/asb.png` | ASB |
| `new-zealand/kiwibank.png` | Kiwibank |
| `new-zealand/westpac.png` | Westpac NZ |
| `new-zealand/tsb.png` | TSB |
| `new-zealand/heartland.png` | Heartland Bank |

## Usage

```tsx
<img src="/bank-logos/australia/commbank.png" alt="Commonwealth Bank" width={40} height={40} />
<img src="/bank-logos/global/chase.svg" alt="Chase" width={40} height={40} />
```

Or with the `EntityAvatar` component:

```tsx
<EntityAvatar src="/bank-logos/singapore/dbs.png" name="DBS" />
```
