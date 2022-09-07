const data = {
  event: {
    type: "event-data",
    payload: {
      id: "3d980fd4-060b-4842-ba7d-461f6a798176",
      category: {
        id: "b8ed55b8-478b-4ba4-bc5f-bb58b0ab5d74",
        slug: "hockey",
        translations: [
          { lang: "en", value: "Hockey" },
          { lang: "de", value: "DE_Hockey" },
          { lang: "fr", value: "FR_Hockey" },
          { lang: "es", value: "ES_Hockey" },
        ],
      },
      competitors: [
        {
          id: "f7f22236-e156-467c-bc48-e07a7bd5a516",
          name: "Edmonton Oilers",
          score: 0,
          translations: [
            {
              id: "1c4126b7-94ef-48fb-91f5-f82ad8bd8e86",
              lang: "en",
              value: "Edmonton Oilers",
            },
            {
              id: "a032483d-ecfb-41ee-9b66-b04cf9de3205",
              lang: "de",
              value: "DE_Edmonton Oilers",
            },
            {
              id: "3de0fa38-6b51-4abd-b80c-74631737439d",
              lang: "fr",
              value: "FR_Edmonton Oilers",
            },
            {
              id: "e41aac2f-471e-4e67-8af5-1d745b2018d9",
              lang: "es",
              value: "ES_Edmonton Oilers",
            },
          ],
        },
        {
          id: "efc86f94-67b8-4adf-81d8-e499de6833c3",
          name: "Calgary Flames",
          score: 0,
          translations: [
            {
              id: "a431e7fa-6dcb-447b-8ae2-9c7b35c7e7de",
              lang: "en",
              value: "Calgary Flames",
            },
            {
              id: "2d5cf3c4-e634-4488-aae3-45384c5a2963",
              lang: "de",
              value: "DE_Calgary Flames",
            },
            {
              id: "7cf23aac-8825-4f82-8834-efc40ca4b278",
              lang: "fr",
              value: "FR_Calgary Flames",
            },
            {
              id: "bf287276-6ef8-4866-9afc-1e575a11aeb9",
              lang: "es",
              value: "ES_Calgary Flames",
            },
          ],
        },
      ],
      markets: [
        {
          id: "841baa62-cf6c-4243-8e17-5f8d685d2847",
          name: "1x2",
          selections: [
            {
              id: "49f594fc-85be-444b-b357-e394964041fd",
              name: "1st win",
              odds: 8.695496687309033,
            },
            {
              id: "f88a5308-fcdb-4274-8d53-b8fe687e8144",
              name: "Draw",
              odds: 9.180431174343104,
            },
            {
              id: "14a4f223-b1e4-458b-a26b-c351a651daca",
              name: "2nd win",
              odds: 6.707607895439544,
            },
          ],
          translations: [
            { lang: "en", value: "1x2" },
            { lang: "de", value: "DE_1x2" },
            { lang: "fr", value: "FR_1x2" },
            { lang: "es", value: "ES_1x2" },
          ],
        },
        {
          id: "16db1a21-3a8e-4d75-8ad1-d687e7281e25",
          name: "handicap",
          selections: [
            {
              id: "afb7eb79-a361-492d-9a60-1f16c183d7a5",
              name: "-0.5",
              odds: 3.973823618800011,
            },
            {
              id: "32cdb527-a2cf-4011-9545-1710b10d92e7",
              name: "+0.5",
              odds: 5.857062857689794,
            },
          ],
          translations: [
            { lang: "en", value: "handicap" },
            { lang: "de", value: "DE_handicap" },
            { lang: "fr", value: "FR_handicap" },
            { lang: "es", value: "ES_handicap" },
          ],
        },
        {
          id: "1bf148b1-c18f-4153-91ee-2bb0c0d6ebf0",
          name: "total",
          selections: [
            {
              id: "f39b90bf-41b8-4699-940c-33ba0d818490",
              name: "o1/1.5",
              odds: 4.1991057171364705,
            },
            {
              id: "35ca607b-5673-4d1d-a3dd-c72432d4199f",
              name: "o1.5/2.0",
              odds: 2.81924344564502,
            },
            {
              id: "08195372-33d2-4c76-9f12-b0ec1b854e25",
              name: "o2.0/2.5",
              odds: 6.854468246267901,
            },
            {
              id: "2da5e39b-cafc-42d6-9856-e0e1f39513ec",
              name: "o2.5/3.0",
              odds: 1.226248197862955,
            },
            {
              id: "e9dbbbe3-a85d-407f-8241-63957dccf291",
              name: "o3.0/3.5",
              odds: 7.533800621232954,
            },
            {
              id: "07f505af-e580-40de-a0f2-ae466c6f8b6f",
              name: "o3.5/4.0",
              odds: 1.8304234957044132,
            },
          ],
          translations: [
            { lang: "en", value: "total" },
            { lang: "de", value: "DE_total" },
            { lang: "fr", value: "FR_total" },
            { lang: "es", value: "ES_total" },
          ],
        },
        {
          id: "deeb2d33-d1b6-42a1-bdd7-1b51e43f0970",
          name: "correctScore",
          selections: [
            {
              id: "9542f2c7-a7fb-4b58-9d8f-8077259a222e",
              name: "0-0",
              odds: 10.80407033570405,
            },
            {
              id: "f07253af-14cb-4ee2-8f2d-a63e1d62070b",
              name: "1-0",
              odds: 10.266161930563051,
            },
            {
              id: "8418d97a-d096-4b46-9385-eb067b5f4753",
              name: "2-0",
              odds: 4.345069002525191,
            },
            {
              id: "41f1e6a0-a13f-45ed-b6ba-9ea9944a643e",
              name: "3-0",
              odds: 1.5267211326134946,
            },
            {
              id: "e819f517-9874-4d57-97ce-a7ba82d52d0b",
              name: "4-0",
              odds: 1.2345161086319947,
            },
            {
              id: "0ca46fdf-cb9b-424c-ac7b-598ddf02ddc6",
              name: "0-1",
              odds: 10.85288735131487,
            },
            {
              id: "aabc6c2a-ef1f-4e4d-ada5-08ec39fd9a45",
              name: "0-2",
              odds: 7.886352647290357,
            },
            {
              id: "227a9a49-cd00-4c68-b78b-c543530705b2",
              name: "0-3",
              odds: 10.631654894394764,
            },
            {
              id: "de9fd115-792f-4d40-89aa-fa21212ca158",
              name: "0-4",
              odds: 3.5982082093077508,
            },
            {
              id: "a84db9ca-a686-42ce-bab2-79a33d292f10",
              name: "1-1",
              odds: 1.695585784839079,
            },
            {
              id: "f739ac5c-0b70-4f56-8c9b-ab975c911505",
              name: "1-2",
              odds: 2.2925737460706443,
            },
            {
              id: "1c27e91b-dc7a-48d8-8689-8db84999ec49",
              name: "1-3",
              odds: 7.231678348820009,
            },
            {
              id: "d793303f-9c41-453e-ac17-084da9b0b8c6",
              name: "1-4",
              odds: 10.988514488287187,
            },
            {
              id: "4cff38ab-2ddd-4faf-a4b4-ae6e2b710289",
              name: "2-2",
              odds: 1.0543432000133648,
            },
            {
              id: "8677e342-3894-490c-a1f8-576c97c8a1a4",
              name: "2-3",
              odds: 6.332435920468566,
            },
            {
              id: "29a93b7e-1f15-453e-8e7d-54df0c1ee204",
              name: "2-4",
              odds: 1.6061035692061933,
            },
            {
              id: "fb7602b2-009b-4477-aa40-17fc66629aed",
              name: "3-3",
              odds: 2.2706335238537148,
            },
            {
              id: "bb8dab94-e943-47a8-a6f9-2c8cfa4128b8",
              name: "3-4",
              odds: 5.861760528093512,
            },
            {
              id: "30a8b7e0-71df-495f-8973-6a1a444e7478",
              name: "4-4",
              odds: 10.975819157272722,
            },
          ],
          translations: [
            { lang: "en", value: "correctScore" },
            { lang: "de", value: "DE_correctScore" },
            { lang: "fr", value: "FR_correctScore" },
            { lang: "es", value: "ES_correctScore" },
          ],
        },
      ],
      startTime: "2022-09-07T02:50:06.605Z",
      updatedAt: "2022-09-07T02:50:06.605Z",
    },
  },
};

export default data;
