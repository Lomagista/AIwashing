const $html = document.querySelector('html');

const RefreshOriginal = "M 47.843 0 L 27.482 0 C 24.446 0 21.461 0.8 18.831 2.318 C 16.201 3.837 14.017 6.021 12.498 8.651 L 2.318 26.284 C 0.8 28.914 0 31.898 0 34.935 C 0 37.972 0.8 40.956 2.318 43.586 L 12.498 61.219 C 14.017 63.849 16.201 66.033 18.831 67.552 C 21.461 69.07 24.446 69.87 27.482 69.87 L 47.843 69.87 C 50.88 69.87 53.864 69.07 56.494 67.552 C 59.124 66.033 61.309 63.849 62.827 61.219 L 73.007 43.586 C 74.526 40.956 75.325 37.972 75.325 34.935 C 75.325 31.898 74.526 28.914 73.007 26.284 L 62.827 8.651 C 61.309 6.021 59.124 3.837 56.494 2.318 C 53.864 0.8 50.88 0 47.843 0 Z";
const RefreshHover = "M 37.663 0 L 37.663 0 C 31.531 0 25.506 1.614 20.195 4.68 C 14.885 7.746 10.474 12.157 7.408 17.467 L 7.408 17.467 C 4.342 22.778 2.728 28.803 2.728 34.935 C 2.728 41.067 4.342 47.092 7.408 52.402 L 7.408 52.402 C 10.474 57.713 14.885 62.123 20.195 65.189 C 25.506 68.255 31.531 69.87 37.663 69.87 L 37.663 69.87 C 43.795 69.87 49.82 68.255 55.13 65.189 C 60.44 62.123 64.851 57.713 67.917 52.402 L 67.917 52.402 C 70.983 47.092 72.597 41.067 72.597 34.935 C 72.597 28.803 70.983 22.778 67.917 17.467 L 67.917 17.467 C 64.851 12.157 60.44 7.746 55.13 4.68 C 49.82 1.614 43.795 0 37.663 0 Z";

const Refresh = document.querySelector(".Refresh");
console.log(Refresh);

Refresh.addEventListener('mouseover', function(){
    anime({
        targets: ".cls-1s",
        d: RefreshHover,
        duration: 500,
        easing: 'easeOutQuad'
    });
});
Refresh.addEventListener('mouseout', function(){
    anime({
        targets: ".cls-1s",
        d: RefreshOriginal,
        duration: 500,
        easing: 'easeOutQuad'
    });
});

const Surprise = document.querySelector(".Click");
Surprise.addEventListener('click', function(){
    let morphCF1Ear = anime({
        targets: '#Ear-1',
        d: [
            {value: 'M-532.174,1400.1c143.475,43.84,1081.378-348.06,1231.5-457S396.43,483.455,179.888,456.885s-216.542,6.642-320.162,75.723S37.742,730.551,101.509,799.632-665.021,1320.394-532.174,1400.1Z'},
            {value: 'M398.629,987.87s130.661,77.714,278.739,17.678S838.46,799.612,834,720.193,765.657,451.849,623.37,426.058,348.528,469.958,333.5,566.979,277.918,927.744,398.629,987.87Z'}
        ],
        transform: [
            {value: 'translate(649.659 1073.399)'},
            {value: 'translate(693.956 996.419)'},
        ],
        fill: [
            {value: '#777'},
            {value: '#f2067c'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1Face = anime({
        targets: '#Face-1',
        d: [
            {value: 'M563.435,1471.793s-215.34,133.879-303.417,177.054-153.7,44.9-181.336,24.178S56.229,1498.6,116.675,1248.181,398.38,594.827,613.456,503.441c111.592-35.869,215.212,38.526,341.417,337.431s596.483,167.387,645.636,158.088,104.949,3.985,62.438,86.351-508.17,146.547-783.8,123.548c-46.956,48.336-111.335,101.475-111.335,101.475S668.69,1411.5,563.435,1471.793Z'},
            {value: 'M503.742,2052.411s-189.628-25.01-246.79-187.317-34.521-320.824-45.84-406.462-192.31-224-163.766-460.009,104.468-377.1,319.544-468.489C489.038,304.827,803.115-43.514,1319.548,47.071s626.538,497.172,626.538,497.172,63.022,226.83-45.408,434.867-309.851,371.517-605.43,436.454c-13.167,125.062-105.605,270.733-105.605,270.733S971.678,2059.49,503.742,2052.411Z'}
        ],
        transform: [
            {value: 'translate(-44.297 76.98)'},
            {value: 'translate(0 0) scale(0.96)'},
        ],
        fill: [
            {value: '#eaeaea'},
            {value: '#3cc'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1Eye = anime({
        targets: '#Eye-1',
        d: [
            {value: 'M425.988,837.342s16.893,8.728,50.651,18.9,38.6,13,63.686,20.473c7.514,10.8-89.161,255.49-131.88,228.891s-123.461-257.852-120.225-260.1,6.533-4.779,19.845-8.807S425.988,837.342,425.988,837.342Z'},
            {value: 'M396.144,273.47s89.732,142.594,116.724,247.614,63.524,181.383,38.647,327.767S465.1,1075.867,465.1,1075.867,350.415,900.212,334.9,811.153s-5.249-298.221,13.1-368.19S396.144,273.47,396.144,273.47Z'}
        ],
        transform: [
            {value: 'translate(228.512 635.874) rotate(-19)'},
            {value: 'translate(726.294 618.728)'},
        ],
        fill: [
            {value: '#969696'},
            {value: '#6f3'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1Nose = anime({
        targets: '#Nose-1',
        d: [
            {value: 'M630.115,454.118c47.988,26.383,51.147,92.756,51.147,92.756s2.684,74.884-35.373,158c34.335,7.584,71.886,24.892,53.281,32.406s-69.054,16.458-69.054,16.458S542.208,867.673,488.07,867.161s-178.793-40.979-226.7-123.772c2.328-63.489,11.814-77.249,23.908-126.553s12.172-44.021,28.489-69.961,104.447-87.647,175.542-105.53S582.126,427.735,630.115,454.118Z'},
            {value: 'M759.352,276.219l-112.031,429.1s105.384,14.293,112.031,97.332S705.92,907.782,685.4,907.668s-76.548-27.649-76.548-27.649-2.735,12.967-79.258,18.2-145.236-30-178.526-114.185c-57.883,16.929-154.858-3.755-164.636-90.346s67.29-134.43,127.334-146.816S485.984,574.12,485.984,574.12Z'}
        ],
        transform: [
            {value: 'translate(355.275 -251.238)'},
            {value: 'translate(362.572 625.782)'},
        ],
        fill: [
            {value: '#4f4f4f'},
            {value: '#fff'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1MouthOut = anime({
        targets: '#MouthOut-1',
        d: [
            {value: 'M895.564,1101.51S714.228,742.291,669.325,666.3,459.162,358.165,382.111,403.333,245.279,510.939,123.059,580.02s-231.1,71.9-257.213,97.975c-6.113,61.175,420.082,504.685,635.959,606.579,34.54,217.6,340.222,699.441,447.3,720.165C1128.711,1939.112,895.564,1101.51,895.564,1101.51Z'},
            {value: 'M936.776,520.705s-170.413-77.122-304.209-75.136-139.473,50.176-139.473,50.176-119.952-32.427-231.145,76.306-119.731,197.3-119.731,197.3,90.335,463.835,588.762,364.827C1080,1054.3,931.915,634.32,932.846,593.78S936.776,520.705,936.776,520.705Z'}
        ],
        transform: [
            {value: 'translate(206.983 1137.248)'},
            {value: 'translate(251.28 1060.268)'},
        ],
        fill: [
            {value: '#ccc'},
            {value: '#fa0'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1MouthIn = anime({
        targets: '#MouthIn-1',
        d: [
            {value: 'M341.736,665.9s6.87-63.759,94.887-90.236c14.312-31.844,58.32-81.219,122.008-90.164,11.43-9.921,20.923-14.257,74.317,9.137s22.984,9.565,71.525,36.3c21.019-13.995,167.746-155.75,230.539,23.327,13.607,78.608-20.116,113.144-55.233,142.8s-108.744,66.12-166.286,72.677S568,773.267,568,773.267s-52.752,122.268-88.084,112.16S360.132,814.316,345.27,771.106,341.736,665.9,341.736,665.9Z'},
            {value: 'M142.217,718.722s94.022-21.1,144.359-27.838,91.251,11.7,130.882-13.583,69.751-76.894,134.292-106.657S626.308,563.651,666.4,550.9s110.766-107.884,270.381-80.817c-74.512,114.524-91.6,301.353-91.6,301.353s-1.277,40.925-41.746,51.859S524.276,925.325,524.276,925.325s-16.3,11.112-39.906-9.875S373.58,820.811,317.035,785.56,142.217,718.722,142.217,718.722Z'}
        ],
        transform: [
            {value: 'translate(222.983 -439.129)'},
            {value: 'translate(251.28 1110.891)'},
        ],
        fill: [
            {value: '#d8d8d8'},
            {value: '#1a4be5'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1Tooth = anime({
        targets: '#Tooth-1',
        d: [
            {value: 'M213.143,817.315s42.932,44.142,67.42,60.92c55.026,13.3,48.374,5.442,179.33-129.4S573.227,605.525,558.11,578.315c-42.374-18.7-86.1-35.909-86.1-35.909l-66.049-23.722L345.5,583.121,308.75,621.479l-43.258,39.537-41.4,34.768-34.42,31.164-32.56,30.7Z'},
            {value: 'M208.991,642.209s49.844,94.211,78.634,98.341,240.193-44.513,293.953-143.817-53.963-112.77-53.963-112.77L511.706,494.6l-16.665,8.3-35.148,4.08-49.919,4.329-50.707,22.513-60.971,49.3-35.2,33.458-32.727,20.57Z'}
        ],
        transform: [
            {value: 'translate(1350.337 309.87)'},
            {value: 'translate(422.634 1158.89)'},
        ],
        fill: [
            {value: '#5e5e5e'},
            {value: '#fff'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1ToothLine = anime({
        targets: '#ToothLine-1',
        d: [
            {value: 'M471.448,453.94S383.165,565.2,345.07,607.529,200.552,747.814,200.552,747.814'},
            {value: 'M255.9,495.408s38.943,39.617,54.316,65.579,44.991,86.362,44.991,86.362'}
        ],
        transform: [
            {value: 'translate(1436.708 439.24)'},
            {value: 'translate(543.006 1188.26)'},
        ],
        fill: [
            {value: '#fff'},
            {value: 'rgba(255,255,255,0)'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1EyeLine = anime({
        targets: '#EyeLine-1',
        d: [
            {value: 'M320.419,1518.542s-137.989-330.9-41.448-371.31S574.292,1200.769,662.3,1255.35'},
            {value: 'M416.542,727.44S14.637,589.657,122,358.794,495.387,254.187,540.938,397.4'}
        ],
        transform: [
            {value: 'translate(129.328 36.763)'},
            {value: 'translate(152.625 510.784)'},
        ],
        fill: [
            {value: '#fff'},
            {value: 'rgba(255,255,255,0)'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1FaceLine = anime({
        targets: '#FaceLine-1',
        d: [
            {value: 'M458.279,216.114s-7.155,145.22-26.062,220.383-46.089,139.521-46.089,139.521'},
            {value: 'M494.126,216.114s-10.709,217.369-39.01,329.875-68.988,208.839-68.988,208.839'}
        ],
        transform: [
            {value: 'translate(206.875 712.586)'},
            {value: 'translate(877.199 471.542)'},
        ],
        fill: [
            {value: 'rgba(255,255,255,0)'},
            {value: 'rgba(255,255,255,0)'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1EarLine = anime({
        targets: '#EarLine-1',
        d: [
            {value: 'M31.231,526.266S675.033,761.3,120.058,798.25'},
            {value: 'M375.971,480.954s97.792-2.183,176.141,62.493'}
        ],
        transform: [
            {value: 'translate(746.7 1277.907) rotate(-10)'},
            {value: 'translate(851.134 1151.147)'},
        ],
        fill: [
            {value: 'rgba(255,255,255,0)'},
            {value: 'rgba(255,255,255,0)'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1X21 = anime({
        targets: '#X2-1',
        d: [
            {value: 'M302.182,243.018s-79.964,28.6-111.653,90.806S156.108,483.5,156.108,483.5'},
            {value: 'M302.182,243.018s-79.964,28.6-111.653,90.806S156.108,483.5,156.108,483.5'}
        ],
        transform: [
            {value: 'translate(242.63 617.562)'},
            {value: 'translate(286.927 540.582)'},
        ],
        fill: [
            {value: 'rgba(255,255,255,0)'},
            {value: 'rgba(255,255,255,0)'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1X11 = anime({
        targets: '#X1-1',
        d: [
            {value: 'M126.219,302.6s79.975-36.871,146.121-36.657S404.991,302.6,404.991,302.6'},
            {value: 'M126.219,302.6s79.975-36.871,146.121-36.657S404.991,302.6,404.991,302.6'}
        ],
        transform: [
            {value: 'translate(165.929 676.384)'},
            {value: 'translate(210.226 599.404)'},
        ],
        fill: [
            {value: 'rgba(255,255,255,0)'},
            {value: 'rgba(255,255,255,0)'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1Eyeball = anime({
        targets: '#Eyeball-1',
        d: [
            {value: 'M1147.761,1243.588c-21.826-.358-86.23-3.22-86.23-3.22s-17.89,21.826-49.376,44.725c9.3,20.395,159.314,195.945,179.752,193.587S1165.841,1260.1,1147.761,1243.588Z'},
            {value: 'M1233.206,1292.988c-7.075-20.438-44.02-50.308-80.179-36.159s-59.742,55.025-45.592,90.4,57.384,51.88,97.473,37.731S1240.281,1313.425,1233.206,1292.988Z'}
        ],
        transform: [
            {value: 'translate(-226.297 45.98)'},
            {value: 'translate(13 10)'},
        ],
        fill: [
            {value: '#727272'},
            {value: '#fff'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    let morphCF1Foreheadl = anime({
        targets: '#Forehead-1',
        d: [
            {value: 'M1422.938,720.778s-198.877-75.822-267.24-94.156S937.866,579.39,937.866,579.39'},
            {value: 'M1663.935,791.024s-297.684-113.492-400.012-140.934-326.056-70.7-326.056-70.7'}
        ],
        transform: [
            {value: 'translate(-562.297 276.98)'},
            {value: 'translate(0 0)'},
        ],
        fill: [
            {value: 'rgba(255,255,255,0)'},
            {value: 'rgba(255,255,255,0)'},
        ],
        strokeWidth: [
            {value: '0'},
            {value: '10'},
        ],
        stroke: [
            {value: 'none'},
            {value: '#000'},
        ],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 500
    });
    anime({
        targets: "#CFO-1",
        left: 55.5+"vw",
        easing: 'easeInOutQuad',
        duration: 500
    })
    anime({
        targets: '#Window1',
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '#Window2',
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '#Window3',
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '#Window4',
        top: 100+"vh",
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '.Click',
        top: 100+'vh',
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '.Click',
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '.See',
        opacity: 0,
        top: 100+'vh',
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '.Select',
        top: 100+'vh',
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '.Choose',
        top: 100+'vh',
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '.Pick',
        top: 100+'vh',
        easing: 'easeInOutQuad',
        duration: 500
    });
    anime({
        targets: '#FaceClone',
        top: -150+"vh",
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 2500
    })
    anime({
        targets: "#CFO-1",
        top: -150+"vh",
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 2500
    })
    let originalFace = document.getElementById('CF-1');
    console.log(originalFace);
    for(let i=2; i<13; i++){
        let cloneFace = originalFace.cloneNode(true);
        cloneFace.id = "CF-"+i;
        cloneFace.style.position = "absolute";
        cloneFace.style.width = "18vw";
        cloneFace.style.height = "18vw";
        cloneFace.style.opacity = "0";
        document.getElementById('FaceClone').appendChild(cloneFace);
        };
    anime({
        targets: '#CF-2',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#CF-3',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#CF-4',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#CF-5',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#CF-6',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#CF-7',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#CF-8',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 1000
    });
    anime({
        targets: '#CF-9',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#CF-10',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#CF-11',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#CF-12',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
    });
    anime({
        targets: '#Illustration',
        top: -150+"vh",
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 2500
    });
    anime({
        targets: "body",
        backgroundColor: "#C8A4F0",
        duration: 1000,
        delay: 1000
    })
    anime({
        targets: '#CF-1',
        top: -65+"vh",
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 3000        
    })
    anime({
        targets: '#RoundBoom',
        transform: [
            {value: "scale(0.5)"},
            {value: "scale(1)"},
        ],
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 3500        
    })
    anime({
        targets: '#WeDo',
        left: "14.8vw",
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 3500        
    })
    anime({
        targets: '#AI',
        left: "30.5vw",
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 3500        
    })
    anime({
        targets: '#Washing',
        left: "57vw",
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 3500        
    })
    anime({
        targets: '.For',
        top: "68vh",
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 3500        
    })
    anime({
        targets: '.X75000',
        top: "77vh",
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 3500        
    })
    let originalFor = document.getElementById('ForBorder');
    console.log(originalFor);
    for(let i=0; i<4; i++){
        let cloneFor = originalFor.cloneNode(true);
        cloneFor.id = "ForBorder"+i;
        cloneFor.style.position = "absolute";
        cloneFor.style.top = "68vh";
        cloneFor.style.left = "5vw";
        cloneFor.style.width = "50vw";
        cloneFor.style.opacity = "0";
        cloneFor.style.zIndex = "-2";
        document.getElementById('TrueDecFront').appendChild(cloneFor);
    };
    for(let x=1; x<4; x++){
        let BackFor = "ForBorder"+x;
        let ele = document.getElementById(BackFor);
        anime({
            targets: ele,
            translateX: -x+"vw",
            opacity: 1,
            easing: 'easeInQuad',
            duration: 1000,
            delay: 4000
         });
    };
    anime({
        targets: '#Reset',
        opacity: 1,
        duration: 500,
        delay: 4000,
        easing: 'easeInQuad',
    })
    anime({
        targets: '#Info',
        opacity: 1,
        duration: 500,
        delay: 4000,
        easing: 'easeInQuad'
    })
});

let Info = document.querySelector('#Info');
Info.addEventListener('click', function(){
    anime({
        targets: '#Info',
        left: 32+'vw',
        opacity: 0,
        duration: 500,
        easing: 'linear'
    })
    anime({
        targets: '#InfoContent',
        left: 0+'vw',
        opacity: 1,
        duration: 500,
        easing: 'linear'
    })
});
let Hide = document.querySelector('#Hide');
Hide.addEventListener('click', function(){
    anime({
        targets: '#Info',
        left: 2+'vw',
        opacity: 1,
        duration: 500,
        easing: 'linear'
    })
    anime({
        targets: '#InfoContent',
        left: -30+'vw',
        opacity: 0,
        duration: 500,
        easing: 'linear'
    })
});

let randomHexColour = function(){
    const hexLetters = '0123456789ABCDEF';
    let colour = '#';
    for( let i = 0; i < 6; i++ ){
      colour += hexLetters[ Math.floor( Math.random() * 16 ) ];
    }
    return colour;
}
const Reset = document.querySelector('#Reset');
const body = document.querySelector('body');
Reset.addEventListener('click', function(){
    body.style.backgroundColor = randomHexColour();
}
);

let pathA = document.querySelector('.AFront');
const length1 = pathA.getTotalLength();
console.log(length1);

let pathI = document.querySelector('.IFront');
const length2 = pathI.getTotalLength();
console.log(length2);

let original = document.getElementById('B');
console.log(original);
for(let i=0; i<10; i++){
    let clone = original.cloneNode(true);
    clone.id = "B"+i;
    clone.style.position = "absolute";
    clone.style.top = "0";
    clone.style.left = "0";
    clone.style.width = "100%";
    clone.style.height = "100%";
    clone.style.opacity = "0";
    document.getElementById('Back').appendChild(clone);
}

setTimeout(
    function(appear){
    for(let x=0; x<10; x++){
        let Back = "B"+x;
        let ele = document.getElementById(Back);
        anime({
            targets: ele,
            translateX: x+"vw",
            opacity: 1,
            easing: 'easeInQuad',
            duration: 1000
        });
}}, 3750);


let Bullshit = document.querySelector(".Bullshit");
let FakeWindow = document.querySelector("#Illustration");
let WindowBack = document.querySelector("#Window");
let CFO = document.querySelector("#CFO-1");
let AIcon = document.querySelector(".AIcon");
let Select = document.querySelector(".Select");
let Pick = document.querySelector(".Pick");
let Choose = document.querySelector(".Choose");
let See = document.querySelector(".See");
let Click = document.querySelector(".Click");
window.addEventListener('scroll', function(){
    const htmlBounds = $html.getBoundingClientRect();
    const maxScroll = htmlBounds.height - window.innerHeight;
    console.log(window.innerHeight);
    console.log(window.scrollY, maxScroll);
    const scrollPercent = window.scrollY/maxScroll * 100;
    console.log(scrollPercent);
    const shitBounds = Bullshit.getBoundingClientRect();
    const shitTop = shitBounds.top;
    if(scrollPercent>9.752){
        Bullshit.style.position = "fixed";
        Bullshit.style.padding = "0";
        Bullshit.style.left = "4.8vw";
        Bullshit.style.top = "9.4vh";
        FakeWindow.style.paddingTop = "165vh";
        AIcon.style.transform = "scale(0.54) translateX(6.5vw)";
        AIcon.style.transformOrigin = "top right";
    }
    else{
        Bullshit.style.position = "relative";
        Bullshit.style.paddingTop = "60vh";
        Bullshit.style.paddingLeft = "4.5vw";
        Bullshit.style.left = "0";
        Bullshit.style.top = "0";
        Bullshit.style.textShadow = "none";
        FakeWindow.style.paddingTop = "25vh";
        AIcon.style.transform = "scale(1) translateX(0)";
        AIcon.style.transformOrigin = "top right";
    }
    if(scrollPercent>27.411){
        CFO.style.position = "fixed";
        CFO.style.top = "34vh";
        CFO.style.left = "47.3vw";
    }
    else{
        CFO.style.position = "absolute";
        CFO.style.top = "177vh";
        CFO.style.left = "47vw";
        Select.style.opacity = 0;
    }
    if(scrollPercent>15.389){
        Select.style.opacity = 1;
    }
    if(scrollPercent>44.0901){
        Select.style.opacity = 0;
    }
    if(scrollPercent>51.411){
        Pick.style.opacity = 1;
    }
    else{
        Pick.style.opacity = 0;
    }
    if(scrollPercent>68.2804){
        Pick.style.opacity = 0;
    }
    if(scrollPercent>75.792){
        Choose.style.opacity = 1;
    }
    else{
        Choose.style.opacity = 0;
    }
    if(scrollPercent>92.397){
        Choose.style.opacity = 0;
    }
    if(scrollPercent>99.909){
        See.style.opacity = 1;
        Click.style.opacity = 1;
    }
    else{
        See.style.opacity = 0;
        Click.style.opacity = 0;
    }
})
