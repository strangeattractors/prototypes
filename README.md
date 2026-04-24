# prototypes

Interactive mockups, iOS flow prototypes, and internal dashboards for YouSquared.

Published at: https://strange-attractor.com/prototypes/

## Structure

```
/
├── industry-auto-config/    # iOS onboarding industry-selection prototype
├── scheduled-outbound/      # iOS contact-events flow
├── vip-transfer/            # iOS contact-routing prototype
├── user-analytics/          # iOS revenue-tab mockup
├── stats-ios/               # iOS stats-tab mockup
├── stats-web/               # Web analytics dashboard mockup
└── pr-velocity/             # Internal team velocity dashboard
```

## Adding a new prototype

1. Create a subfolder: `<name>/` with `index.html`
2. Add a link row to the root `index.html`
3. Commit + push to `gh-pages`

## Notes

- Prototypes may embed mock data. Check each README/source for specifics.
- `pr-velocity/` is a static snapshot — regenerate via `/Users/alexdalyac/...` tooling when stats go stale.
