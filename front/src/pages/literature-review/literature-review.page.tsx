import RoutesEnum from "../../utils/enums/routes.enum";
import { StackStyled } from "./literature-review.styles";
import { Container, Grid, Typography } from "@mui/material";
import DefaultLayout from "../../layout/deafult/default.layout";
import ToolCard from "../../components/card/tool-card.component";
import { Database, PresentationChart, Article, Table } from "phosphor-react";

const options = [
    {
        icon: <Database size={32} weight="bold" />,
        path: RoutesEnum.LiteratureReview,
        title: "Dataset Generation of Articles",
        abstract: "Generate a dataset of articles from BibTeX, RIS, and other files",
    },
    {
        icon: <PresentationChart size={32} weight="bold" />,
        path: RoutesEnum.LiteratureReview,
        title: "Data Analysis",
        abstract: "Generate datasets with information about your set of articles",
    },
    {
        icon: <Article size={32} weight="bold" />,
        path: RoutesEnum.LiteratureReview,
        title: "Article Selection",
        abstract: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        icon: <Table size={32} weight="bold" />,
        path: RoutesEnum.LiteratureReview,
        title: "Data Synthesis",
        abstract: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        icon: <Database size={32} weight="bold" />,
        path: RoutesEnum.LiteratureReview,
        title: "Dataset Generation of Articles",
        abstract: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        icon: <Database size={32} weight="bold" />,
        path: RoutesEnum.LiteratureReview,
        title: "Dataset Generation of Articles",
        abstract: "Generate a dataset of articles from BibTeX, RIS, and other files",
    },
];

function LiteratureReviewPage() {
    return <>
        <DefaultLayout>
            <Container>
                <StackStyled spacing={10}>
                    <Typography variant="h3">Literature Review</Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {options.map(option => (
                            <Grid item xs={2} sm={4} md={4}>
                                <ToolCard 
                                    title={option.title} 
                                    abstract={option.abstract}
                                    icon={option.icon}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </StackStyled>
            </Container>
        </DefaultLayout>
    </>
}

export default LiteratureReviewPage;
