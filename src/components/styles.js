import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    capture: {
        fontSize: 50,
        color: 'white'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    CameraBar: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    header: {
        backgroundColor: 'teal'
    },
    icons: {
        color: 'white'
    },
    myHistory: {
        width: null,
        height: 400,
    },
    CardImage: {
        flex: 1,
        height: 200,
        width: null,
    },
    CardImageMargin: {
        height: null,

    },
    StoryHeader: {
        backgroundColor: 'transparent',
    },
    StoryTitle: {
        color: 'white',
        fontSize: 26,
    },
    StorySubtitle: {
        color: 'white',
        fontSize: 20,
    }
});

export default styles;
