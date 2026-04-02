import { useNavigation } from '@/navigation/Navigation';
import React, { useCallback } from 'react';
import ButtonPressAnimation from '@/components/animations/ButtonPressAnimation';
import { Text } from '@/design-system';
import Routes from '@/navigation/routesNames';
import { openInBrowser } from '@/utils/openInBrowser';
import { isENSAddressFormat } from '@/helpers/validators';

export default function RecordHyperlink({ value }: { value: string }) {
  const { goBack, navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    if (isENSAddressFormat(value)) {
      goBack();
      navigate(Routes.PROFILE_SHEET, {
        address: value,
        fromRoute: 'RecordHyperlink',
      });
    } else {
      openInBrowser((value.match('https') ? '' : 'https://') + value);
    }
  }, [value, goBack, navigate]);

  return (
    <ButtonPressAnimation onPress={navigateToProfile}>
      <Text color="action (Deprecated)" size="16px / 22px (Deprecated)" weight="regular">
        {value}
      </Text>
    </ButtonPressAnimation>
  );
}
