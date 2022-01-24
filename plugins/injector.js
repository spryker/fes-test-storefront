import { fesInjectorSetup } from '@spryker-oryx/vsf';
import {
  STATIC_PROVIDERS,
  ExperiencePreviewService,
  Services,
} from '@spryker-oryx/experience';

export default (context, inject) => {
  const PREVIEW_PROVIDER = [];

  if (context.route.query.ebPreview) {
    PREVIEW_PROVIDER.push({
      provide: Services.Experience,
      useClass: ExperiencePreviewService,
    });
  }

  return fesInjectorSetup(context, inject, [
    ...STATIC_PROVIDERS,
    ...PREVIEW_PROVIDER,
  ]);
};
