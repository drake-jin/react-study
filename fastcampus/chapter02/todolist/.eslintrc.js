module.exports = {
    "extends": "airbnb",
    'rules': {
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'react/jsx-filename-extension': 'off',

        'jsx-a11y/no-static-element-interactions': 'off',

        //이건 나중에 실제 업무에서 사용할 때 쓰는것이 좋겠다.
        'react/prop-types': 'off', // 속성값을 반드시 지정해야한다.
        'jsx-a11y/click-events-have-key-events': 'off', // 클릭이벤트를 만들었으면 키보드이벤트도 같이 넣어서 마우스만 컨트롤 하는게 아닌 키보드 컨트롤도 가능하게끔 
        
    },
};