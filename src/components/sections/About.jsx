import React from 'react';
import {ArticleLayout} from '../common/Layout';

const Article = () => {
    return (
        <ArticleLayout header="Kdo jsme?" footer="">
            <p className="text-justify">Rozvíjející se stavební firma, která dává důraz na kvalitu a efektivní řešení
                staveb. Zabýváme se jak kompletní realizací pozemních staveb, tak i inženýrskou činností, samostatné
                dodávky výplní otvorů, odborná motáž požárních ucpávek apod. Více se dozvíte záložce služby.
            </p>

            <p className="text-justify">Snažíme se jít s dobou a pracujeme s elektronickým stavebním deníkem, dáváme
                investorovi možnost kontrolovat vlastní stavbu pomocí webového rozhraní atd.
            </p>
        </ArticleLayout>
    );
};


export default Article;