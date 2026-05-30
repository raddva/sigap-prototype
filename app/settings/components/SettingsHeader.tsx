// app/screens/settings/components/SettingsHeader.tsx

export default function SettingsHeader() {
  return (
    <div className="mb-space-12 pt-space-4">
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
        System Settings
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
        Configure SIGAP operational parameters and integrations
      </p>
    </div>
  );
}