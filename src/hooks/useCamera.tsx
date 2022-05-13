import { useCallback, useState } from 'react';

import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { useDropdownMessage } from '../contexts/DropdownMessageContext';
import { ImageSourceDTO } from '../dtos/ImageSourceDTO';
import { MessageType } from '../global/constants/MessageType';

export const useCamera = () => {
  //@ts-ignore
  const { ref } = useDropdownMessage();

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<ImageSourceDTO | null>(null);

  const options: ImageLibraryOptions = {
    selectionLimit: 1,
    includeBase64: false,
    mediaType: 'photo',
  };

  const selectImageGalery = useCallback(async () => {
    try {
      setLoading(true);
      const result = await launchImageLibrary(options);

      if (result.didCancel) {
        ref.current.alertWithType(
          MessageType.WARN,
          'Ops!!!',
          'Operação cancelada pelo usuario!',
        );
      }

      if (result.assets) {
        const image = result?.assets[0];
      
        setImageFile({
          uri: image.uri as string,
          name: image.fileName as string,
          type: image.type as string,
          base64: image.base64,
        });
      }
      ref.current.alertWithType(
        MessageType.INFO,
        'Sucesso',
        'Nova imagem selecionada com sucesso',
      );

      setLoading(false);
    } catch (err: any) {
      ref.current.alertWithType(MessageType.ERROR, 'Ops!!!', err.message);

      setLoading(false);
    }
  }, []);

  return { loading, imageFile, selectImageGalery };
};
